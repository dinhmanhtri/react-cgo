class TodoForm {
  constructor() {
    this.cacheElements();
    this.init();
    this.initEvent();
  }

  cacheElements() {
    this.$listTodo = document.getElementById("listTodo");
    this.$todoInput = document.getElementById("todoInput");
    this.$addBtn = document.getElementById("addBtn");
    this.$removeItem = document.getElementsByClassName(
      "remove mdi mdi-close-circle-outline"
    );
  }

  init() {
    this.buildTodoList();
  }

  initEvent() {
    this.$addBtn.addEventListener("click", () => {
      this.addNewTodo();
    });
    this.$removeItem.addEventListener("click", () => {
      
    });
  }

  buildTodoList() {
    const promise = this.fetchTodoList();
    promise
      .then((response) => {
        response.data.forEach((todo, index) => {
          let checked = "";
          if (todo.completed) {
            checked = "checked";
          }
          let listItem = document.createElement("li");
          listItem.innerHTML = `<div class="form-check"> 
                                  <label class="form-check-label"> 
                                    <input class="checkbox" type="checkbox" ${checked}>
                                      ${todo.title}
                                    <i class="input-helper"></i>
                                  </label>
                                </div> 
                                <i class="remove mdi mdi-close-circle-outline"></i>`;

          listItem.setAttribute("class", "form-check");
          this.$listTodo.appendChild(listItem);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  addNewTodo() {
    let title = this.$todoInput.value;
    let listItem = document.createElement("li");
    listItem.innerHTML = `<div class="form-check"> 
                                  <label class="form-check-label"> 
                                    <input class="checkbox" type="checkbox">
                                      ${title}
                                    <i class="input-helper"></i>
                                  </label>
                                </div> 
                                <i class="remove mdi mdi-close-circle-outline"></i>`;

    listItem.setAttribute("class", "form-check");
    this.$listTodo.appendChild(listItem);
    this.$todoInput.value = "";
  }

  removeTodo () {

  }

  async fetchTodoList() {
    try {
      return await axios.get("https://jsonplaceholder.typicode.com/todos");
    } catch (error) {
      throw new Error(error);
    }
  }
}
