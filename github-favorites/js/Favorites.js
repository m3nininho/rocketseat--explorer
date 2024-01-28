import { GithubUser } from "./GithubUser.js";

// classe que vai conter a logica dos dados
// como os dados serão estruturados

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();

    GithubUser.search().then((user) => console.log(user));
  }
  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || [];
  }
  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.entries)); // transformar a string em formato de json para salvar no localstorage
  }
  async add(username) {
    try {
      const userExists = this.entries.find(entry => entry.login === username);

      if (userExists) {
        throw new Error("Usuário já cadastrado");
      }

      const user = await GithubUser.search(username);

      if (user.login === undefined) {
        throw new Error("Usuário não encontrado"); // O objeto de erro vai procurar o próximo catch.
      }

      this.entries = [user, ...this.entries]; // Caso tenha outros usuarios cadastrados. Imutabilidade
      this.update();
      this.save();
    } catch (error) {
      alert(error.message);
    }
  }
  delete(user) {
    const filterredEntries = this.entries.filter(
      (entry) => entry.login !== user.login
    );

    this.entries = filterredEntries;
    this.update();
    this.save();
  }
}

// classes que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);
    this.tbody = this.root.querySelector("table tbody");
    this.update();
    this.onadd();
  }
  onadd() {
    const addButton = this.root.querySelector(".search button");
    addButton.onclick = () => {
      const { value } = this.root.querySelector(".search input");

      this.add(value);
    };
  }
  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector(".user img").alt = `Imagem de ${user.name}`;
      row.querySelector(".user p").textContent = user.name;
      row.querySelector(".user a").href = `https://github.com/${user.login}`;
      row.querySelector(".user span").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".remove").onclick = () => {
        const isOk = confirm("Tem certeza que deseja deletar esta linha?");
        if (isOk) {
          this.delete(user);
        }
      };

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="user">
      <img
        src="https://github.com/m3nininho.png"
        alt="Imagem de Luiz Augusto"
      />
      <a href="https://github.com/m3nininho" target="_blank">
        <p>Luiz Augusto</p>
        <span>m3nininho</span>
      </a>
    </td>
    <td class="repositories">61</td>
    <td class="followers">12</td>
    <td>
      <button class="remove">&times;</button>
    </td>
    `;

    return tr;
  }
  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
