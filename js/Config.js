/**
 * Все тексты взяты с википедии
 */


const Posts = [
    GenPost('1.jpg', '1874', '<b>Евгений Сандов (1874-1924)</b> Евгений Сандов стал родоначальников современного бодибилдинга, показывая свою форму людям, и тренеруя других людей.'),
    GenPost('2.png', '1901', 'Сандов организовал первый конкурс по бодибилдингу 14 сентября 1901 года, названный «Великим соревнованием». Он проводился в Королевском Альберт-холле в Лондоне. Судьями конкурса были Сандов, сэр Чарльз Лоус и сэр Артур Конан Дойл , и многие любители бодибилдинга были отвернуты из-за подавляющего числа зрителей. Трофеем, врученным победителю, была золотая статуя Сандова, созданная Фредериком Помероем. Победителем стал Уильям Л. Мюррей из Ноттингема . Серебряный трофей Сандова был вручен победителю, занявшему второе место, Д. Куперу. Бронзовый трофей Сандова — теперь самый известный из всех — был вручен победителю, занявшему третье место.'),
    GenPost('3.jpg', '1965', 'Конкурс по бодибилдингу «Мистер Олимпия» 1965 года был первым в истории после его создания Констой Палласпуро . Конкурс был организован 18 сентября 1965 года в Бруклинской академии музыки в Нью-Йорке. Он был открыт для предыдущих победителей «Мистера Вселенная». Девятнадцатилетний Гарольд Пул победил Ларри Скотта, выиграв «Мистер Вселенная» IFBB 1963 года, и Скотт вернулся на следующий год, чтобы выиграть титул, в то время как Пул выиграл «Мистер Америка». Теперь эти двое снова сошлись в этом новом конкурсе, «Мистер Олимпия», который проводился по той же программе, что и «Мистер Америка» и «Мистер Вселенная». Пулу было всего 21 год; Скотту было 26. Третий участник, 29-летний Эрл Мейнард, только что выиграл «Мистер Вселенная» 1965 года, когда он прыгнул в «Мистер Олимпия». Хотя не было объявлено никаких других мест, кроме победителя, всегда предполагалось, что Пул занял второе место в общем зачете.'),
    GenPost('4.jpg', '1967', 'Серджио Олива стал первым чернокожим чемпионом на «Мистер Олимпия». Его форма была по настоящему очень массивна и эстетична, благодаря чему несмотря на предвзятость судей он одержал победу.')
].reverse()


function GenPost(Image, Date, Description) {
    return {
        Image, Date, Description,
        
        GenHTML: function () {
            return `
	            <div class="wall-post">
	                <img class="wall-post-image" src="./src/img/${Image}">
	                <div class="wall-post-container">
	                    <h1 class="wall-post-date">${Date}</h1>
	                    <p class="wall-post-description">
	                        ${Description}
	                    </p>
	                </div>
	            </div>
            `
        }
    }
}