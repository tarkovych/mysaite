var ArrName=["Macrocategory","Category","Dish / Product","Where prepared","Food description","Meal","Place","With whom consumed","Day","Gender","Age","BMI"]; 
var ObjLabel={
C1 :["Первое блюдо (бульоны / супы / борщ)","Мясо и птица","Рыба и морепродукты","Гарниры и вторые блюда (включая каши, блюда из яиц, блинчики, вареники и т.д.)","Салаты и овощи","Молочные продукты и блюда из них","Закуски (мясные нарезки, колбасы, сыры, холодцы / заливное)","Бутерброды / бургеры / пироги / пицца / фастфуд / суши","Снеки соленые (чипсы, сухарики, орешки, попкорн, семечки)","Сухие завтраки / хлопья / мюсли / полуфабрикаты","Фрукты, сухофрукты, орехи","Десерты / сладкое","Безалкогольные напитки","Горячие напитки","Алкогольные напитки","Свежий хлеб и сухари","Детское питание","ДРУГОЕ БЛЮДО","Протеиновые коктейли и витамины"] , 
C1a:["Бульон","Борщ / солянка / рассольник / капустняк","Суп прозрачный","Крем-суп","Холодный суп / окрошка","Блюда из курицы","Блюда из другой птицы","Котлеты (в том числе паровые)","Отбивные","Мясо запеченное (включая рулеты / шашлыки / стейки)","Мясо отварное","Жаркое / гуляш","Ребрышки тушеные","Субпродукты (сало, язык, печень, и т.д.)","Голубцы / фаршированный перец, тефтели, блюда из фарша","Сосиски","Рыба жареная","Рыба речная вареная или запеченая","Рыба морская вареная или запеченая","Рыба копченая","Рыба соленая","Рыбные консервы","Морепродукты","Рыбные полуфабрикаты","Картофель","Макаронные изделия (макароны, спагетти, лапша и.т.д.)","Лазанья / Запеканка с вермишелью","Другая лапша","Рис","Каши и крупы","Овощи отварные","Овощи гриль / запеченные / жаренные","Блинчики и оладки","Вареники","Пельмени / равиоли / хинкали / манты","Яйца и блюда из яиц","Салаты традиционные","Овощи свежие / сырые","Соленья, маринады, консервация","Упакованные традиционные молочные продукты (молоко, кефир, сметана, творог и т.д.)","Молочные продукты купленные на рынке","Кисломолочные продукты домашнего приготовления","Упакованные современные молочные продукты (йогурты, десерты, коктейли)","Молочные продукты растительного происхождения","Детские молочные продукты","Блюда из творога","Мясные закуски","Колбасы","Рыбные закуски","Сыр твердый","Сыр мягкий","Бутерброды / сендвичи","Бургеры","Пироги / Пирожки / Киши","Пицца","Хот-доги, роллы в лаваше, чебуреки","Картошка фри","Закуски к пиву / в кляре","Японские суши / роллы","Вяленое / сушеное / копченое мясо / рыба","Картофельные чипсы","Орехи соленые","Попкорн","Семечки","Сухарики / соленое печенье","Сухие завтраки / хлопья / мюсли","Полуфабрикаты","Фрукты свежие","Фрукты консервированные","Сухофрукты","Орехи","Мороженое","Конфеты","Шоколадные плитки","Шоколадные батончики","Шоколадные яйца","Нешоколадные / диетические батончики","Бублики / пряники","Печенье / Вафли","Пироги / Пирожки сладкие","Кексы / Маффины / Капкейки","Круассаны / Эклеры / Пончики","Торты / Чизкейки / Пирожные","Пирожные порционные","Желе / Пудинги / Зефир / Пастила / Паста","Жевательная резинка","Вода","Сладкие газированные напитки","Сок ","Смузи / Морсы","Компот / Узвар / Кисель","Энергетический напиток","Кофе","Чай","Какао / горячий шоколад","Пиво","Слабоалкогольные напитки","Вино","Вино игристое","Крепкие алкогольные напитки","Свежий хлеб","Сухари","Грудное молоко","Детские смеси","Детские каши","Детские пюре","Детские напитки","Запишите название блюда","Безалкогольные коктейли","Алкогольные коктейли","Японские суши / роллы","Пироги / Пирожки сладкие","Другое первое блюдо","Другое блюдо из мяса/ птицы","Другое блюдо из рыбы / морепродуктов","Другой гарнир / второе блюдо","Другой салат / овощи","Другие молочные продукты","Другие закуски","Другие бутерброды / фастфуд","Другие снеки","Другие блюда из сухих полуфабрикатов","Другие фрукты / сухофрукты / орешки","Другие десерты / сладкое","Другие безалкогольные напитки","Другие горячие напитки","Другие алкогольные напитки","Другие хлебобулочные изделия","Другое детское питание"],
C2: ["Бульон из птицы (куриный / индюшачий)","Бульон мясной (говяжий / свинной)","Бульон овощной","Борщ традиционный","Борщ постный","Борщ зеленый","Солянка","Рассольник","Капустняк","Суп гороховый","Суп грибной","Суп из чечевицы / суп фасолевый","Суп куриный  с крупой","Суп куриный  с лапшой / вермишелью","Суп луковый","Суп мясной  с крупой","Суп мясной  с лапшой / вермишелью","Суп овощной","Суп рыбный/ Уха","Суп с морепродуктами","Суп харчо","Шурпа из баранины","Крем-суп гороховый","Крем-суп грибной","Крем-суп из тыквы","Крем-суп сырный","Крем-суп томатный","Окрошка","Котлета по-киевски","Бедрышко куриное жареное","Бедрышко куриное запеченое / тушеное","Бедрышко куриное копченое","Бедрышко куриное отварное","Крыло куриное жареное","Крыло куриное запеченое / тушеное","Крыло куриное копченое","Крыло куриное отварное","Ножка куриная жареная","Ножка куриная запеченая / тушеная","Ножка куриная копченая","Ножка куриная отварная","Окорок куриный жареный","Окорок куриный запеченый / тушеный","Окорок куриный копченый","Окорок куриный отварной","Филе куриное жареное / отбивная","Филе куриное запеченое / тушеное","Филе куриное копченое","Филе куриное отварное","Курица гриль","Шашлычок из курицы","Ножка индюшачья запеченая / тушеная","Филе индюшатины жареное / отбивная","Филе индюшатины отварное","Утка запеченая","Котлета по-киевски","Котлеты из курицы","Котлеты из свинины","Котлеты из говядины","Котлеты из телятины","Котлеты из другого мяса","Отбивная из курицы","Отбивная из индюшатины","Отбивная из свинины","Отбивная из говядины","Отбивная из телятины","Отбивная из ягненка","Запеченая свинина / шашлык из свинины","Запеченая говядина / шашлык / стейк из говядины","Запеченая телятина / шашлык / стейк из телятины","Запеченая ягнятина / шашлык / каре из ягненка","Мясной рулет","Отварная свинина","Отварная говядина","Отварная телятина","Жаркое / гуляш из курицы","Жаркое / гуляш из индюшатины","Жаркое / гуляш из свинины","Жаркое / гуляш из говядины","Жаркое / гуляш из телятины","Жаркое / гуляш из кролика","Жаркое / гуляш из ягненка","Ребрышки свинные тушеные","Ребрышки говяжьи  тушеные","Блюдо из куриных субпродуктов (ЗАПИШИТЕ НАЗВАНИЕ)","Блюдо из мясных субпродуктов (ЗАПИШИТЕ НАЗВАНИЕ)","Блюдо из других субпродуктов(ЗАПИШИТЕ НАЗВАНИЕ)","Голубцы","Фаршированный перец","Тефтели","Сосиски куриные","Сосиски свинные","Сосиски говяжьи","Сосиски свино-говяжьи","Заливная рыба / в томатной пасте","Рыба жареная","Рыба жареная в кляре","Рыба фаршированная","Рыбные котлеты","Карась вареный / запеченый","Карп вареный / запеченый","Лещ вареный / запеченый","Окунь вареный / запеченый","Сом вареный / запеченый","Щука вареная / запеченая","Дорадо (морской карась) вареный / запеченый","Лосось вареный / запеченый","Минтай вареный / запеченый","Палтус вареный / запеченый","Семга вареная / запеченая","Сибас (морской окунь) вареный / запеченый","Скумбрия вареная / запеченая","Судак вареный / запеченый","Треска вареная / запеченая ","Тунец вареный / запеченый","Форель вареная / запеченая","Хек вареный / запеченый","Горбуша копченая","Килька копченая","Лосось / семга / форель копченая","Мойва / салака / ставридам копченая ","Палтус копченый","Сельдь атлантическая копченая","Скумбрия копченая","Лосось / семга / форель слабосоленая","Сельдь атлантическая соленая","Скумбрия соленая","Тюлька соленая","Икра красная","Бычки в томате","Кета консервированная","Килька консервированная в томате","Лосось консервированный","Печень трески","Сардины в масле","Сардины в томате","Тунец в масле","Шпроты","Кальмар вареный","Кальмар жаренный","Креветки вареные","Мидии вареные","Моллюски смешанные, вареные или приготовленные на пару","Моллюски, смешанные виды, консервированные, дренированные твердые вещества","Морская капуста","Раки, смешанные виды, обработанные, вареные или приготовленные на пару","Устрицы","Крабовые палочки (из сурими)","Рыбные палочки / котлеты, замороженные, разогретые","Отварной картофель (в мундире)","Отварной картофель без кожуры","Картофельное пюре","Картофель жареный","Картофель жареный с луком","Картофель жареный с луком и грибами","Картошка по-селянски","Картошка фри","Драники","Зразы / Кратопляники","Картофель тушеный","Картофель запеченый","Жаркое / Рагу (картофель тушеный с овощами и мясом)","Жаркое / Рагу (картофель тушеный с овощами БЕЗ мяса)","Макаронные изделия (макароны, спагетти, лапша и.т.д.)","Спагетти / паста без птицы/ мяса, сливочный соус","Спагетти / паста без птицы/ мяса, томатный соус","Спагетти / паста с мясом птицы, сливочный соус","Спагетти / паста с мясом птицы, томатный соус","Спагетти / паста с мясом, сливочный соус","Спагетти / паста с мясом, томатный соус","Спагетти / паста с рыбой, сливочный соус","Спагетти / паста с рыбой, томатный соус","Спагетти / паста с морепродуктами, сливочный соус","Спагетти / паста с морепродуктами, томатный соус","Спагетти / паста с овощами, сливочный соус","Спагетти / паста с овощами, томатный соус","Спагетти / паста с грибами, сливочный соус","Спагетти / паста с грибами, томатный соус","Лазанья овощная (7.5cm x 9cm)","Лазанья с мясом птицы (7.5cm x 9cm)","Лазанья с мясом (7.5cm x 9cm)","Запеканка с вермишелью","Рисовая лапша","Яичная лапша","Удон","Соба (лапша из гречневой муки)","Рис отварной белый","Рис отварной дикий","Рис / плов / паэлья с овощами без мяса","Рис / плов / паэлья с мясом птицы","Рис / плов / паэлья с мясом","Рис / паэлья с рыбой","Рис / паэлья с морепродуктами","Булгур","Вермишель с молоком","Гречка / гречневая каша на воде","Гречневая каша на молоке / с молоком","Каша из чечевицы","Киноа","Кукурузная каша на воде","Кукурузная каша на молоке / с молоком","Кус кус","Манная каша на воде","Манная каша на молоке / с молоком","Овсянная каша на воде","Овсянная каша на молоке / с молоком","Перловая каша на воде","Перловая каша на молоке / с молоком","Пшеничная каша на воде","Пшеничная каша на молоке / с молоком","Пшонная каша на воде","Пшонная каша на молоке / с молоком","Рис/ рисовая каша на воде","Рис/ рисовая каша на молоке / с молоком","Ячневая каша на воде","Ячневая каша на молоке / с молоком","Горошек зеленый отварной","Капуста брокколи отварная","Капуста цветная отварная","Кукуруза сладкая отварная","Морковь отварная","Пастернак отварной","Свекла (буряк) отварная","Спаржа отварная","Грибы шампиньйоны гриль / запеченные / жаренные","Другие грибы гриль / запеченные / жаренные","Кабачки гриль / запеченные / жаренные","Баклажаны гриль / запеченные / жаренные","Перец сладкий гриль / запеченные / жаренные","Спаржа гриль / запеченные / жаренные","Оладки","Блинчики (без начинки)","Блинчики с мясом","Блинчики с рыбой ","Блинчики с творогом","Блинчики с грибами","Блинчики с другой начинкой","Вареники  с мясом","Вареники с рыбой ","Вареники с творогом","Вареники с грибами","Вареники с капустой","Вареники с картошкой","Вареники с фруктовой начинкой","Ленивые вареники","Вареники с другой начинкой","Пельмени / равиоли","Хинкали / манты ","Яичница/омлет из 2 яиц ПУСТАЯ","Яичница/омлет из 2 яиц с сыром","Яичница/омлет из 2 яиц с луком и ветчиной/ колбаской","Яичница/омлет из 2 яиц с луком и грибами","Омлет из 2 яиц (с молоком/ кефиром)","Яйцо вареное","Яйцо пашот","Яйцо перепелиное вареное","Яйцо перепелиное сырое","Винегрет","Мимоза / Невеста","Оливье","Салат Греческий","Салат из крабовых палочек","Салат из плавленных сырков","Салат из свеклы (буряка)","Салат Овощной","Салат с семгой","Салат с тунцом","Салат Цезарь","Салат Цезарь с креветками","Салат Цезарь с курицей","Сельдь под шубой","Другой салат (ЗАПИШИТЕ НАЗВАНИЕ)","Авокадо","Капуста белокачанная","Капуста пекинская/ китайская","Лук зеленый сырой","Лук репчатый","Морковь","Огурец","Помидор","Перец","Редис","Салат латук","Сельдерей сырой","Шпинат сырой","Другие овощи (ЗАПИШИТЕ)","Ассорти овощей маринованное","Баклажаны консервированные","Горошек зеленый консервированный","Грибы консервированные","Имбирь маринованный","Кабачки консервированные","Капуста квашеная","Капуста маринованная (красная)","Кукуруза сладкая консервированная","Лечо","Морковь по-корейски","Огурцы консервированные или соленые","Оливки зеленые консервированные","Оливки черные / маслины консервированные","Перец красный консервированный","Помидоры консервированные или соленые","Сельдерей маринованный","Фасоль консервированная","Чеснок маринованный","Пастеризованное молоко в упаковке","Ультрапастеризованное молоко в упаковке","Молочный коктейль (ароматизированное молоко / молоко с наполнителями) в упаковке","Кефир в упаковке","Сметана в упаковке","Творог кисломолочный белый в упаковке","Сладкая творожная масса, (но не глазированые сырки) в упаковке","Зернистый творог со сливками в упаковке","Масло / спред в упаковке ","Сливки в упаковке","Закваска, простокваша и другие молочные ферментированные напитки в упаковке","Ряженка в упаковке","Молоко, приобретенные на рынке / базаре","Сметана, приобретенные на рынке / базаре","Творог, приобретенный на рынке / базаре","Йогурт домашнего/ собственного приготовления","Творог домашнего/ собственного приготовления","Ложковые йогурты в упаковке","Питьевой йогурт в упаковке ","Творожный десерт / молочный десерт в упаковке","Глазированные сырки в упаковке","Мягкий сыр в упаковке ","Сокосодержащие молочные коктейли (молоко с соком, йогурт с соком, сыворотка с соком) в упаковке","Молоко растительного происхождения (кокосовое, миндальное, рисовое, овсяное, ореховое)","Йогурты / десерты на основе молока растительного происхождения (кокосовое, миндальное, рисовое, овсяное, ореховое)","Молоко для детей до 3 лет","Молочные Каши (Яготинське для дітей)","Билакт, Бифилакт, другие ферметированные продукты для детей до 3 лет","Творог для детей до 3 лет ","Питьевой йогурт для детей до 3 лет","Детский молочный коктейль (ароматизированное молоко / молоко с наполнителями) в упаковке","Ложковый йогурт для детей 3-6 лет","Питьевой йогурт для детей 3-6 лет","Сладкие сырки / десерты для детей 3-6 лет","Сырники","Творожная запеканка","Ленивые вареники","Балык / корейка","Грудинка / подчеревка","Домашние колбаски","Жюльен из курицы с грибами","Сало","Холодец из курицы","Холодец из мяса","Язык запеченный","Язык запеченный / холодец","Сырокопченая колбаса","Сыровяленая колбаса","Салями пепперони","Салями","Полукопченая/ варено-копченая колбаса","Вареная колбаса","Колбаса ливерная","Фаршмак","Сыр Гауда","Сыр Голландський ","Сыр Пармезан","Сыр Росийский","Сыр Сметанковый","Сыр Чеддер","Сыр Швейцарский","Сыр Эдам","Сыр козий","Плавленый сырок","Бри","Брынза","Камамбер","Моцарелла","Сливочный сыр / крем-сыр","Сулугуни","Фета","Сыр из козьего молока мягкий","Сендвичи / бутерброды с курицей ","Сендвичи / бутерброды с мясом ","Сендвичи / бутерброды с рыбой ","Сендвичи / бутерброды овощные","Сендвичи / бутерброды с сыром","Сендвичи / бутерброды с колбасой","Бутерброд со шпротами","Гамбургер","Гамбургер, двойной","Чизбургер","Чизбургер, двойной","Вегетарианский бургер","Бургер с курицей","Фишбургер / бургеры с рыбой","Киш/ пирог с балыком","Киш/ пирог с лососем","Киш/ пирог со шпинатом","Пирог/ пирожок с мясом","Пирог/ пирожок с рыбой ","Пирог/ пирожок с грибами","Пирог/ пирожок с капустой","Пирог/ пирожок с картошкой","Пирог/ пирожок с яйцом","Пирог/ пирожок с другой начинкой","Пицца 4 сезона (ассорти)","Пицца 4 сыра","Пицца Гавайская (курица + ананас)","Пицца Грибная","Пицца Карбонара","Пицца Куриная","Пицца Маргарита (моцарелла+базилик)","Пицца Неаполитанская / с колбасками","Хот-дог","Сосиска в тесте","Ролл в лаваше с овощами / сыром (без мяса)","Ролл в лаваше с курицей","Ролл в лаваше с мясом","Ролл в лаваше с рыбой","Чебуреки / беляши","Картошка по-селянски","Картошка фри","Кальмар в кляре","Креветки в кляре","Куриные наггетсы","Луковые кольца в кляре","Сыр в кляре","Ролл Калифорния","Ролл Филадельфия","Ролл с тунцом и авокадо","Ролл с угрем и авокадо","Теплые роллы","Маки ролы овощной","Маки ролы с лососем","Маки ролы с огурцом","Маки ролы с тунцом","Маки ролы с угрем","Сашими","Суши с рыбой","Вяленое мясо","Анчоусы сушеные","Бычки сушеные","Вяленые / копченые колбаски","Желтый полосатик сушеный","Кальмары копченые","Кальмары сушеные","Тунец сушеный","Щука сушеная","Картофельные чипсы со вкусом","Картофельные чипсы соленые","Кешью жареный, соленый","Микс орехов, жареные, соленые","Микс орехов, соленые","Миндаль жареный, соленый","Фисташки жареные, соленые","Попкорн со вкусом бекона","Попкорн со вкусом карамели","Попкорн со вкусом сыра","Попкорн соленый","Семечки подсолнуха","Семечки тыквенные","Сухарики с приправами","Крекер / галетное печенье соленое","Сухие завтраки (хлопья, шарики, подушечки, фигурные)","Мюсли","Хлопья овсяные / овсяная каша быстрого приготовления","Хлопья гречневые","Хлопья мультизлаковые","Хлопья кукурузные глазированные","Гранола","Вермишель быстрого приготовления","Пюре быстрого приготовления","Супы / борщи быстрого приготовления","Ананас ","Апельсин","Банан","Виноград","Гранат (9.5cm diam)","Грейпфрут розовый или красный","Груша с кожурой","Инжир свежий","Киви","Клубника","Лимон/ лайм","Малина","Манго","Мандарин","Памело","Папайя","Черника","Яблоко с кожурой (7cm.diam)","Абрикос консервированный","Ананас консервированный","Вишня консервированная","Груша консервированная","Персик консервированный","Фруктовый коктейль, консервированный","Курага","Финик сушенный","Инжир сушенный","Чернослив","Изюм","Клюква сушенная","Манго сушеный","Сушенный ананас / цукаты","Банан сушеный чипсы","Яблоки сушеные (сушка)","Грецкий орех","Кедровые орешки","Кешью","Миндаль","Фисташки","Фундук","Микс орехов","Мороженое пломбир","Мороженое эскимо","Мороженое ванильное","Мороженое шоколадное","Мороженое с фруктовыми добавками","Мороженое в шоколаде","Замороженный фруктовый сок","Сорбет фруктовый","Грильяж","Желейные конфеты","Изюм в сахаре / морские камни","Ириски","Карамель","Леденец","Мармелад","Миндаль в шоколаде","Шоколадные конфеты","Плитка молочного шоколада","Плитка черного шоколада","Плитка белого шоколада","Bounty / Баунти","Kit Kat / Кит кат","Lion / Лайон","M&M / М энд Мс","Mars / Марс","Nuts / Натс","Picnic / Пикник","Snickers / Сникерс","Twix / Твикс","Шоколадные яйца","Батончик злаковый","Батончик злаковый с сухофруктами","Батончик злаковый с орехами","Батончик злаковый с сухофруктами и орехами","Батончик злаковый в шоколаде","Козинаки","Бублики большие (10см)","Сушка/ баранки/ бублики","Пряники без начинки","Пряники с начинкой","Вафли / вафельные трубочки ванильные","Вафли / вафельные трубочки с ореховым наполнителем","Вафли / вафельные трубочки шоколадные","Крекер / галетное печенье сладкое","Печеное овсяное","Печенье песочное","Печенье с шоколадом","Печенье слоеное","Пирог/ пирожок с творогом","Пирог/ пирожок с яблочной начинкой / штрудель / шарлотка","Пирог/ пирожок с вишневой начинкой / штрудель","Пирог/ пирожок с маковой начинкой / штрудель","Пирог/ пирожок с фруктовой начинкой","Пирог/ пирожок с джемом","Кекс/ маффин / капкейк с сахарной пудрой","Кекс/ маффин / капкейк с изюмом / курагой","Кекс/ маффин / капкейк с джемовой начинкой","Кекс/ маффин / капкейк с шоколадом","Круассан без начинки и без глазури","Эклер без начинки и без глазури","Пончик без начинки и без глазури","Круассан с сахарной глазурью","Эклер с сахарной глазурью","Пончик с сахарной глазурью","Круассан с джемом","Круассан с масляным кремом","Круассан с шоколадной начинкой и/или глазурью","Круассан со заварным молоком ","Круассан со сгущеным молоком ","Эклер с джемом","Эклер с заварным кремом","Эклер с маслянным кремом","Эклер с шоколадной начинкой и/или глазурью","Эклер со сгущеным молоком ","Пончик с джемом","Пончик с шоколадной начинкой и/или глазурью","Торт / пирожное Бисквитный","Торт / пирожное Брауни","Торт / пирожное Киевский","Торт / пирожное Маковый","Торт / пирожное Медовик","Торт / пирожное Монастырская изба","Торт / пирожное Наполеон","Торт / пирожное Перекладинец (с фруктами и желе)","Торт / пирожное Вишня в шоколаде","Торт / пирожное Прага","Чизкейк классический","Чизкейк с фруктами","Чизкейк шоколадный","Безе","Ватрушка","Макарон","Орешки со сгущенокй","Пироженое корзинка /  с белковым кремом","Пироженое корзинка с желейной начинкой","Пироженое корзинка с заварным кремом","Пироженое корзинка с фруктовой начинкой","Пирожное картошка шоколадное","Слойка","Трубочка со сгущеным молоком","Желе","Зефир","Паста ореховая","Паста шоколадная","Пастила","Пудинг","Жевательная резинка","Вода минеральная (газированная / негазированная)","Вода водопроводная","Вода с лимоном","Кока-кола","Кока-кола без сахара","Фанта","Спрайт","Пепси","Миринда","7UP","Байкал","Дюшес","Лимонад","Ситро","Тархун","Тоник","Холодный чай","Абрикосовый сок / нектар","Апельсиновый сок","Виноградный сок готовый к употреблению, с добавленным витамином С","Вишневый сок","Гранатовый сок","Грейпфруфовый сок ","Манго сок/ нектар","Морковный сок","Мультивитамин сок","Овощной сок из разных овощей","Персиковый сок","Томатный сок","Яблочный сок ","Другой сок (ЗАПИШИТЕ НАЗВАНИЕ)","Смузи из","Морс из","Кисель","Компот","Узвар","Энергетический напиток","Кофе заварной / сваренный","Кофе заварной без кофеина","Кофе растворимый","Кофе эспрессо","Кофе американо","Капуччино","Кофе латте","Кофе 3 в 1","Чай черный","Чай зеленый","Чай травяной","Чай фруктовый","Гарячий шоколад","Какао","Пиво темное","Пиво светлое","Пиво нефильтрованное","Пиво безалкогольное","Джин с тоником","Ром с колой","Сидр","Шейк","Белое сухое","Белое полусухое","Белое полусладкое","Белое сладкое / крепленое ","Розовое сухое","Розовое полусухое","Розовое полусладкое","Розовое сладкое / крепленое ","Красное сухое","Красное полусухое","Красное полусладкое","Красное сладкое / крепленое ","Белое сухое","Белое полусухое","Белое полусладкое","Белое сладкое / крепленое ","Розовое сухое","Розовое полусухое","Розовое полусладкое","Розовое сладкое / крепленое ","Красное сухое","Красное полусухое","Красное полусладкое","Красное сладкое / крепленое ","Бренди","Вермут","Виски","Водка","Джин","Коньяк","Ликеры","Мартини","Ром","Текила","Багет","Батон","Белый хлеб","Булочки несладкие","Лаваш/ лепешки","Украинский хлеб","Хлеб белорусский","Хлеб бородинский","Хлеб заварной","Хлеб мультизерновой","Хлеб прибалтийский светлый","Хлеб прибалтийский темный","Хлеб ржаной / Серый хлеб","Фокачча / хлеб итальянский","Чиабатта / хлеб итальянский","Хлебцы ","Сухари","Хлебные палочки","Грудное молоко","Детская смесь безлактозная / безмолочная","Детская смесь","Гречневая Безмолочная Каша","Гречневая Молочная Каша","Кукурузная Безмолочная Каша","Кукурузная Молочная Каша","Мультизлаковая Безмолочная Каша","Мультизлаковая Молочная Каша","Овсяная Безмолочная Каша","Овсяная Молочная Каша","Рисовая Безмолочная Каша","Рисовая Молочная Каша","Ячневая Безмолочная Каша","Ячневая Молочная Каша","Мясное пюре","Мясо-овощное пюре","Овощное пюре","Рыбно-овощное пюре","Фруктово-молочное пюре","Фруктово-овощное пюре","Фруктовое пюре","Фруктовое  пюре с добавками","Детское какао","Детский чай (травяной / фруктовый)","Детские овощные соки","Детские фруктовые соки","АВТОЗАПОЛНИТЬ / НЕ ОТОБРАЖАТЬ","Тунец в собственном соку","Бобы / чечевица и блюда из них (ЗАПИШИТЕ НАЗВАНИЕ):","ЗАПИШИТЕ НАЗВАНИЕ КОКТЕЙЛЯ:","Настойки (Бехеровка, Ягермайстер)","Апероль","Б-52","Блю курасао","Космополитан","Кровавая Мери","Лонг айленд айс ти","Маргарита","Пина колада","Секс на пляже","Текила бум","Текила санрайз","Другой коктейль (ЗАПИШИТЕ НАЗВАНИЕ):","Ролл Калифорния","Ролл Филадельфия","Ролл с тунцом и авокадо","Ролл с угрем и авокадо","Теплые роллы","Маки ролы овощной","Маки ролы с лососем","Маки ролы с огурцом","Маки ролы с тунцом","Маки ролы с угрем","Сашими","Суши с рыбой","Пирог/ пирожок с творогом","Пирог/ пирожок с яблочной начинкой / штрудель / шарлотка","Пирог/ пирожок с вишневой начинкой / штрудель","Пирог/ пирожок с маковой начинкой / штрудель","Пирог/ пирожок с фруктовой начинкой","Пирог/ пирожок с джемом","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:","Запишите название блюда:"],
C4: ["Приготовлено дома","Куплено в магазине упакованным, в готовом к употреблению виде ","Куплено /заказано в кафе / ресторане и т.д.","Приготовлено в офисе"],
D2: ["Перекус до завтрака / сразу после того, как я проснусь ","Завтрак","Второй завтрак","Перекус в первой половине дня / между завтраком и обедом","Обед","Перекус после обеда / Полдник","Перекус перед ужином","Ужин","Перекус после ужина / перед тем, как пойти спать","Ночной перекус / после того как лег спать","Перекус на протяжении целого дня (только для воды)","Другое"],
D3: ["Дома","У друга / родственника дома","На работе / на учебе","В ресторане","В столовой, которая находиться на работе / учебе","В кафе, кофейне, булочной","В баре / пабе, ночном клубе","В торгово-развлекательном центре / во время закупок, шоппинга","В сети быстрого питания (McDonalds, KFC) ","В спортзале / спорт комплексе/ на тренировке","В местах для отдыха (кинотеатр, тематический парк, стадион, пр.)","В супермаркете / гипермаркет","В машине ","В общественном транспорте","На ходу / на улице","В другом месте"],
S2: ["Сам (-а)","С друзьями, знакомыми","С родственниками","С коллегами по работе","Другое"],
D1: ["Рабочий / будний день","Выходной / праздничный день"],
GDR:["Мужчины","Женщины"],
AGE:["1-3 лет","4-6 лет","7-10 лет","11-14 лет","15-18 лет","19-24 года","25-30 лет","31-39 лет","40-49 лет","50-60 лет"],
BMI:["Недостаточный вес (<18.5)","Нормальный вес (18.5-25)","Избыточный вес (25-30)","Ожирение (>30)"]
}

