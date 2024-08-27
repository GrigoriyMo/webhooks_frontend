import { renderToString } from 'vue/server-renderer';
import { useNuxtApp } from '#app';

export default defineEventHandler(async (event) => {
  // Получаем экземпляр Nuxt
  const nuxtApp = useNuxtApp();

  // Создаем экземпляр компонента страницы
  const PageComponent = (await import('~/pages/webhooks.vue')).default;

  // Рендерим страницу в строку
  const content = await renderToString(PageComponent, nuxtApp.ssrContext);

  // Генерация ETag на основе содержимого
  const hash = computeHash(content);
  const ifNoneMatch = event.req.headers['if-none-match'];

  // Устанавливаем ETag
  event.res.setHeader('ETag', hash);

  // Проверяем, совпадает ли ETag с If-None-Match
  if (ifNoneMatch === hash) {
    event.res.statusCode = 304; // Возвращаем 304 Not Modified
    event.res.end(); // Завершаем обработку
    return;
  }

  // Возвращаем отрендеренную страницу
  event.res.setHeader('Content-Type', 'text/html');
  event.res.end(content);
});

// Функция для простого хеширования содержимого
function computeHash(content) {
  return `W/"${content.length.toString(16)}"`;
}
