$(document).ready(function() {
    $('.lazyload').mouseover(function(evt) {
        const $this = $(evt.currentTarget)
        console.log("--------", $this.height());
        $this.css('top', -($this.height() - 300))
    })

    $('.lazyload').mouseout(function(evt) {
        const $this = $(evt.currentTarget)
        console.log("--------", $this.height());
        $this.css('top', 0)
    })
})