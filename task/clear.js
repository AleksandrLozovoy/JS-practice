import { deleteAsync } from "del";

// Конфигурация
import path from "../config/path.js";

// Удаление директории

const clear = () => {
  return  deleteAsync(path.root);
};

export default clear;
