class User {
  constructor(password, name) {
    this.status = 'user'
    this.name = name
    this.password = password
  }
}

class Editor extends User {
  constructor(password, name) {
    super(password, name)
    this.status = "editor"
  }
}

class Admin extends User {
  constructor(password, name) {
    super(password, name)
    this.status = "admin"
  }
}

export {
  User,
  Editor,
  Admin
};