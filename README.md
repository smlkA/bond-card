React:
по условию использую CRA
Реакт компонеты написаны с помощью классов (про хуки знаю, но в последнее время на проекте писал компоненты через классы)

Redux:
Для управления side-effects используется Redux-Saga
В качестве селектора используется reselect
(выбор данных инструментов обусловлен тем, что работаю с ними на текущем проекте и имею свежий опыт)

Верстка:
На верстку практически не тратил время, выбрал библиотку компонетов antd и использовал дефолтные стили (ранее не использовал, решил попроовать, коллеги хвалят)

Роутинг
Для роутинга взял react-router. Роутинг понадобился, так как решил чтобы юзер начинал со спика облигаций (спикос захардожен и имеет один элемент) и при клике на имя в списке переходли на детальную информацио об облигации

График:
Для графика взял rechart.js. По условию задания не тратил время на исследование плюсов и минусов данного решения, принимаем, что она оптимально для данной задачи (на самом деле нет, нужно разбираться с API компонентов и как управлять различными масштабами осей)

Подзадачи:

1. развернуть CRA, создать структуру проекта, необходимую редакс обвязку
2. разработать компонент списка облигаций (макс простой, статический список)
3. разработать компонет детального вида. Подкомпоненты - хедер, панель с переключение периода, график, селектор значение по Y оси, отображение ошибки запроса
4. принимаю, что можно сделать один запрос на сервер и взять годовые значени. Для остальных периодов будем выбирать как derived state
5. редусер, акшены и сагу (пока что один запрос на сервер)
6. написать мок ответа сервера с рандомными данными

Моя оценка по времени 6 часов
фактически так и вышло, закончил бы быстрее, но CRA при npm test долго ругался пакет fsevents, пришлось поставить явно, так как более приемлемого решения быстро не нашел
Для случая, если с сервера приходит ошибка сделал action и сообветсвующее поле в сторе, но на UI не реализовал отображения данного состояния
