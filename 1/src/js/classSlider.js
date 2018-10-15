/**
 * Создает экземпляр slider.
 *
 * @constructor
 * @this slider
 * @param slides количество слайдов в данном слайдере
 * @param current по умолчанию стоит 0, содержит значение текущего слайда (нумерация с нуля)
 */
class slider {
    constructor(slides,current = 0){
        this.SLIDES = slides;
        this.CURRENT = current;
    }

    /**
     * @method next прокручивает слайды на один вперед
     */
    next() {
        this.SLIDES[this.CURRENT].className = 'slide';
        this.CURRENT = (this.CURRENT+1)%this.SLIDES.length;
        this.SLIDES[this.CURRENT].className = 'slide showing';}
    /**
     * @method back прокручивает слайды на один назад
     */
    back() {
        this.SLIDES[this.CURRENT].className = 'slide';
        if (this.CURRENT == 0) this.CURRENT = this.SLIDES.length - 1;
        else
            this.CURRENT = (this.CURRENT - 1) % this.SLIDES.length;
        this.SLIDES[this.CURRENT].className = 'slide showing';
    }
}
let SLIDER = new slider(document.querySelectorAll('#slides .slide'),0);
