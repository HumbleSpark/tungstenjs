window.data = window.data || {};
window.data.tutorials = window.data.tutorials || [];
window.data.tutorials.push({
  name: 'TodoMVC',
  steps: [
    {
      name: 'Add the ability to mark an item as completed.',
      index: 1,
      description_html: 'When a list item is marked as completed it should have a <code>completed</code> property set as true.  Clicking the checkbox should mark the todo as complete by updating this completed value which will toggle the class <code>completed</code> on its parent <code>li</code>',
      template: '<div class="todoapp">\n  <header class="header">\n    <h1>todos</h1>\n    <!-- todoapp -->\n    <input placeholder="What needs to be done?" type="text" autofocus="true" class="new-todo js-new-todo" value="{{newValue}}">\n  </header>\n  <section class="main">\n    <input class="toggle-all js-toggle-all" type="checkbox" {{#allCompleted}}checked="checked"{{/allCompleted}}>\n    <label for="toggle-all">Mark all as complete</label>\n    <ul class="todo-list js-todo-list">\n    {{#todoItems}}\n    {{^hidden}}\n      <li class="js-todo-item {{#completed}} completed {{/completed}} {{#editing}} editing {{/editing}}">\n      <!-- {{title}} -->\n      {{^editing}}\n        <div class="view">\n          <input class="toggle js-toggle" type="checkbox" {{#completed}}checked="checked"{{/completed}}>\n          <label class="js-todo-title">{{title}}</label>\n          <button class="destroy js-destroy"></button>\n        </div>\n      {{/editing}}\n      {{#editing}}\n      <input class="edit js-todo-edit" value="{{title}}">\n      {{/editing}}\n    </li>\n  {{/hidden}}\n\n        {{/todoItems}}\n  </ul>\n  </section>\n  {{#hasTodos}}\n  <footer class="footer">\n  <span class="js-todo-count todo-count"><strong>{{todoCount}}</strong> item{{#todoCountPlural}}s{{/todoCountPlural}} left</span>\n  {{#hasCompleted}}\n  <button class="clear-completed js-clear-completed">Clear completed</button>\n  {{/hasCompleted}}\n  </footer>\n  {{/hasTodos}}\n</div>',
      js: "var View = tungsten.View, Model = tungsten.Model, Collection = tungsten.Collection;\nvar TodoItemView = View.extend({\n  ``events: { /* unimplemented */ },``\n  ``handleClickToggle: function() {\n    // unimplemented\n  }``\n}, {\n  debugName: 'TodoItemView'\n});\n\nvar NewItemView = View.extend({}, {\n  debugName: 'NewTodoItemView'\n});\n\nvar AppView = View.extend({\n  ``childViews: { /* unimplemented */ }``\n}, {\n  debugName: 'TodoAppView'\n});\nvar ItemModel = Model.extend({});\nvar ItemCollection = Collection.extend({\n  model: ItemModel\n});\nvar AppModel = Model.extend({\n  ``relations: { /* unimplemented */ }``,\n  defaults: {\n    todoItems: [],\n  }\n});\n\nnew AppView({\n    el: document.querySelector('#app'),\n    template: compiledTemplates.app_view,\n    model: new AppModel({todoItems: [{title: 'Learn Tungsten.js'}, {title: 'Write todo app'}]}),\n    dynamicInitialize: true\n});"
    },
    {
      name: 'Add the ability to add a new todo item',
      index: 2,
      description_html: 'New todos are entered in the input at the top of the app. Pressing Enter should create the todo item, append it to the todo list, and clear the input.',
      template: '<div class="todoapp">\n  <header class="header">\n    <h1>todos</h1>\n    <!-- todoapp -->\n    <input placeholder="What needs to be done?" type="text" autofocus="true" class="new-todo js-new-todo" value="{{newValue}}">\n  </header>\n  <section class="main">\n    <input class="toggle-all js-toggle-all" type="checkbox" {{#allCompleted}}checked="checked"{{/allCompleted}}>\n    <label for="toggle-all">Mark all as complete</label>\n    <ul class="todo-list js-todo-list">\n    {{#todoItems}}\n    {{^hidden}}\n      <li class="js-todo-item {{#completed}} completed {{/completed}} {{#editing}} editing {{/editing}}">\n      <!-- {{title}} -->\n      {{^editing}}\n        <div class="view">\n          <input class="toggle js-toggle" type="checkbox" {{#completed}}checked="checked"{{/completed}}>\n          <label class="js-todo-title">{{title}}</label>\n          <button class="destroy js-destroy"></button>\n        </div>\n      {{/editing}}\n      {{#editing}}\n      <input class="edit js-todo-edit" value="{{title}}">\n      {{/editing}}\n    </li>\n  {{/hidden}}\n\n        {{/todoItems}}\n  </ul>\n  </section>\n  {{#hasTodos}}\n  <footer class="footer">\n  <span class="js-todo-count todo-count"><strong>{{todoCount}}</strong> item{{#todoCountPlural}}s{{/todoCountPlural}} left</span>\n  {{#hasCompleted}}\n  <button class="clear-completed js-clear-completed">Clear completed</button>\n  {{/hasCompleted}}\n  </footer>\n  {{/hasTodos}}\n</div>',
      js: "var View = tungsten.View, Model = tungsten.Model, Collection = tungsten.Collection;\nvar ENTER_KEY = 13;\nvar TodoItemView = View.extend({\n  events: {\n    'change .js-toggle': 'handleClickToggle'\n  },\n  handleClickToggle: function() {\n    this.model.toggle();\n  }\n}, {\n  debugName: 'TodoItemView'\n});\n\nvar NewItemView = View.extend({\n  events: {\n    'keyup': 'handleKeyup'\n  },\n  ``handleKeyup: function(e) {\n    // unimplemented\n  }``\n}, {\n  debugName: 'NewTodoItemView'\n});\n\nvar AppView = View.extend({\n  ``childViews: {\n    'js-todo-item': TodoItemView\n  }``\n}, {\n  debugName: 'TodoAppView'\n});\nvar ItemModel = Model.extend({\n  toggle: function() {\n   this.set({ completed: !this.get('completed') });\n  }\n});\nvar ItemCollection = Collection.extend({\n  model: ItemModel\n});\nvar AppModel = Model.extend({\n  relations: {\n    todoItems: ItemCollection\n  }\n});\n\nnew AppView({\n    el: document.querySelector('#app'),\n    template: compiledTemplates.app_view,\n    model: new AppModel({todoItems: [{title: 'Learn Tungsten.js'}, {title: 'Write todo app'}]}),\n    dynamicInitialize: true\n});"
    },
    {
      name: 'Add counter with derived properties',
      index: 3,
      description_html: 'The footer should be displayed with a counter if any todo items exist.  It displays the number of active todos in a pluralized form.  Make sure to pluralize the item word correctly: 0 items, 1 item, 2 items. Example: 2 items left',
      template: '<div class="todoapp">\n  <header class="header">\n    <h1>todos</h1>\n    <!-- todoapp -->\n    <input placeholder="What needs to be done?" type="text" autofocus="true" class="new-todo js-new-todo" value="{{newValue}}">\n  </header>\n  <section class="main">\n    <input class="toggle-all js-toggle-all" type="checkbox" {{#allCompleted}}checked="checked"{{/allCompleted}}>\n    <label for="toggle-all">Mark all as complete</label>\n    <ul class="todo-list js-todo-list">\n    {{#todoItems}}\n    {{^hidden}}\n      <li class="js-todo-item {{#completed}} completed {{/completed}} {{#editing}} editing {{/editing}}">\n      <!-- {{title}} -->\n      {{^editing}}\n        <div class="view">\n          <input class="toggle js-toggle" type="checkbox" {{#completed}}checked="checked"{{/completed}}>\n          <label class="js-todo-title">{{title}}</label>\n          <button class="destroy js-destroy"></button>\n        </div>\n      {{/editing}}\n      {{#editing}}\n      <input class="edit js-todo-edit" value="{{title}}">\n      {{/editing}}\n    </li>\n  {{/hidden}}\n\n        {{/todoItems}}\n  </ul>\n  </section>\n  ``{{#hasTodos}}\n  <footer class="footer">\n  <span class="js-todo-count todo-count"><strong>{{todoCount}}</strong> item{{#todoCountPlural}}s{{/todoCountPlural}} left</span>\n  {{#hasCompleted}}\n  <button class="clear-completed js-clear-completed">Clear completed</button>\n  {{/hasCompleted}}\n  </footer>\n  {{/hasTodos}}``\n</div>',
      js: "var View = tungsten.View, Model = tungsten.Model, Collection = tungsten.Collection;\nvar ENTER_KEY = 13;\nvar TodoItemView = View.extend({\n  events: {\n    'change .js-toggle': 'handleClickToggle'\n  },\n  handleClickToggle: function() {\n    this.model.toggle();\n  }\n}, {\n  debugName: 'TodoItemView'\n});\n\nvar NewItemView = View.extend({\n  events: {\n    'keyup': 'handleKeyup'\n  },\n  handleKeyup: function(e) {\n    if (e.which === ENTER_KEY && e.currentTarget.value !== '') {\n      this.model.get('todoItems').add({title: e.currentTarget.value.trim()});\n      this.model.set('newValue', '');\n    } else  {\n      this.model.set('newValue', e.currentTarget.value);\n    }\n  }\n}, {\n  debugName: 'NewTodoItemView'\n});\n\nvar AppView = View.extend({\n  childViews: {\n    'js-new-todo': NewItemView,\n    'js-todo-item': TodoItemView\n  }\n}, {\n  debugName: 'TodoAppView'\n});\nvar ItemModel = Model.extend({\n  toggle: function() {\n   this.set({ completed: !this.get('completed') });\n  }\n});\nvar ItemCollection = Collection.extend({\n  model: ItemModel\n});\nvar AppModel = Model.extend({\n  relations: {\n    todoItems: ItemCollection\n  },\n  ``derived: { /* unimplemented */ }``,\n});\n\nnew AppView({\n    el: document.querySelector('#app'),\n    template: compiledTemplates.app_view,\n    model: new AppModel({todoItems: [{title: 'Learn Tungsten.js'}, {title: 'Write todo app'}]}),\n    dynamicInitialize: true\n});"
    },
    {
      name: 'TodoMVC Completed Example',
      index: '&#9733;',
      description_html: 'This is the completed demo of TodoMVC.',
      template: '<div class="todoapp">\n  <header class="header">\n    <h1>todos</h1>\n    <!-- todoapp -->\n    <input placeholder="What needs to be done?" type="text" autofocus="true" class="new-todo js-new-todo" value="{{newValue}}">\n  </header>\n  <section class="main">\n    <input class="toggle-all js-toggle-all" type="checkbox" {{#allCompleted}}checked="checked"{{/allCompleted}}>\n    <label for="toggle-all">Mark all as complete</label>\n    <ul class="todo-list js-todo-list">\n    {{#todoItems}}\n    {{^hidden}}\n      <li class="js-todo-item {{#completed}} completed {{/completed}} {{#editing}} editing {{/editing}}">\n      <!-- {{title}} -->\n      {{^editing}}\n        <div class="view">\n          <input class="toggle js-toggle" type="checkbox" {{#completed}}checked="checked"{{/completed}}>\n          <label class="js-todo-title">{{title}}</label>\n          <button class="destroy js-destroy"></button>\n        </div>\n      {{/editing}}\n      {{#editing}}\n      <input class="edit js-todo-edit" value="{{title}}">\n      {{/editing}}\n    </li>\n  {{/hidden}}\n\n        {{/todoItems}}\n  </ul>\n  </section>\n  {{#hasTodos}}\n  <footer class="footer">\n  <span class="js-todo-count todo-count"><strong>{{todoCount}}</strong> item{{#todoCountPlural}}s{{/todoCountPlural}} left</span>\n  {{#hasCompleted}}\n  <button class="clear-completed js-clear-completed">Clear completed</button>\n  {{/hasCompleted}}\n  </footer>\n  {{/hasTodos}}\n</div>',
      js: "var View = tungsten.View, Model = tungsten.Model, Collection = tungsten.Collection;\nvar ENTER_KEY = 13;\nvar ESC_KEY = 27;\nvar TodoItemView = View.extend({\n  events: {\n    'blur .js-todo-edit': 'handleBlurTodoEdit',\n    'click .js-toggle': 'handleClickToggle',\n    'click .js-destroy': 'handleClickDestroy',\n    'dblclick .js-todo-title': 'handleDblClickTodoTitle',\n    'keydown .js-todo-edit': 'handleKeyDownTodoEdit',\n    'keypress .js-todo-edit': 'handleKeyPressTodoEdit'\n  },\n  handleBlurTodoEdit: function(e) {\n    if (!this.model.get('editing')) {\n      return;\n    }\n    this.clear(e.currentTarget);\n  },\n  handleClickDestroy: function() {\n    this.model.destroy();\n  },\n  handleClickToggle: function() {\n    this.model.toggle();\n  },\n  handleDblClickTodoTitle: function(e) {\n    this.model.set('editing', true);\n    e.currentTarget.focus();\n  },\n  handleKeyDownTodoEdit: function(e) {\n    if (e.which === ESC_KEY) {\n      this.model.set('editing', false);\n      this.model.set('title', this.model.get('title'));\n    }\n  },\n  handleKeyPressTodoEdit: function(e) {\n    if (e.which === ENTER_KEY) {\n      this.clear(e.currentTarget);\n    }\n  },\n  clear: function(input) {\n    var value = input.value;\n\n    var trimmedValue = value.trim();\n\n    if (trimmedValue) {\n      this.model.set({ title: trimmedValue });\n      this.model.set('editing', false);\n    } else {\n      this.handleClickDestroy();\n    }\n  }\n}, {\n  debugName: 'TodoItemView'\n});\n\nvar NewItemView = View.extend({\n  events: {\n    'keyup': 'handleKeyup'\n  },\n  handleKeyup: function(e) {\n    if (e.which === ENTER_KEY && e.currentTarget.value !== '') {\n      this.model.get('todoItems').add({title: e.currentTarget.value.trim()});\n      this.model.set('newValue', '');\n    } else  {\n      this.model.set('newValue', e.currentTarget.value);\n    }\n  }}, {\n  debugName: 'NewTodoItemView'\n});\n\nvar AppView = View.extend({\n  childViews: {\n    'js-new-todo': NewItemView,\n    'js-todo-item': TodoItemView\n  },\n  events: {\n    'click .js-toggle-all': 'handleClickToggleAll',\n    'click .js-clear-completed': 'handleClickClearCompleted'\n  },\n  handleClickClearCompleted: function() {\n    _.invoke(this.model.get('todoItems').where({completed: true}), 'destroy');\n    return false;\n  },\n  handleClickToggleAll: function(e) {\n    var completed = e.currentTarget.checked;\n    this.model.get('todoItems').each(function(item) {\n      item.set('completed', completed);\n    });\n  }\n}, {\n  debugName: 'TodoAppView'\n});\nvar ItemModel = Model.extend({\n  toggle: function() {\n    this.set({\n      completed: !this.get('completed')\n    });\n  }\n});\nvar ItemCollection = Collection.extend({\n  model: ItemModel\n});\nvar AppModel = Model.extend({\n  relations: {\n    todoItems: ItemCollection\n  },\n  defaults: {\n    todoItems: [],\n  },\n  derived: {\n    hasTodos: {\n      deps: ['todoItems'],\n      fn: function() {\n        return this.get('todoItems').length > 0;\n      }\n    },\n    incompletedItems: {\n      deps: ['todoItems'],\n      fn: function() {\n        return this.get('todoItems').filter(function(item) {\n          return !item.get('completed');\n        });\n      }\n    },\n    allCompleted: {\n      deps: ['todoItems'],\n      fn: function() {\n        if (this.get('todoItems').length) {\n          return this.get('todoItems').every(function(item) {\n            return item.get('completed');\n          });\n        }\n      }\n    },\n    todoCount: {\n      deps: ['incompletedItems'],\n      fn: function() {\n        return this.get('incompletedItems').length;\n      }\n    },\n    todoCountPlural: {\n      deps: ['todoCount'],\n      fn: function() {\n        return this.get('todoCount') !== 1;\n      }\n    },\n    hasCompleted: {\n      deps: ['todoItems'],\n      fn: function() {\n        return this.get('todoItems').length - this.get('incompletedItems').length > 0;\n      }\n    }\n  }\n});\n\nnew AppView({\n    el: document.querySelector('#app'),\n    template: compiledTemplates.app_view,\n    model: new AppModel({}),\n    dynamicInitialize: true\n});"
    }
  ]
});
