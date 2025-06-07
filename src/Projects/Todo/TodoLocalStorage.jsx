const todoKey = "todos";

export const getLocalStorageTodo = () => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
};

export const setLocalStorageTodo = (tasks) => {
    return localStorage.setItem(todoKey, JSON.stringify(tasks));
};