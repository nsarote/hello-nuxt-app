<template>
  <div id="todoList">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input :checked="todo.done" type="checkbox" @change="toggle(todo)" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button class="button-3" @click="removeTodo(todo)">Remove</button>
      </li>
      <li>
        <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  middleware: 'auth',
  head() {
    return {
      title: 'Todo List',
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos.list
    },
  },
  methods: {
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle',
    }),
    removeTodo(todo) {
      this.$store.commit('todos/remove', todo)
    },
  },
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
