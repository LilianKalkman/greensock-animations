(function($) {

    /*

    colors:

    orange - #F8AD43
    red - #F8876E
    green - #73C996

    Meter bcg - #c6d7df to #5AB783
	Meter stroke - #7c99a2 to #448962

    */

    var $coin = $('#Coin'),
        path = [{x: -90, y: 120}, {x:-45, y: -220}, {x: 0, y: 120}],
        $Petr = $('#Petr'),
        $h1 = $('h1'),
        $MainBulb = $('#MainBulb'),
        $BulbIdea = $('#BulbIdea'),
        $BulbIdeaLigth = $('#MainBulb2'),
        $part1 = $('#Part1'),
        $pointer = $('#pointer'),
        $Liquids = $('.liquid'),
        $Liquid1 = $('#Liquid1'),
        $Liquid2 = $('#Liquid2'),
        $Liquid3 = $('#Liquid3'),
        $Liquid4 = $('#Liquid4'),
        $Liquid5 = $('#Liquid5'),
        $Liquid6 = $('#Liquid6'),
        $Liquid7 = $('#Liquid7'),
        $Liquid8 = $('#Liquid8'),
        $Liquid9 = $('#Liquid'),
        $LiquidInsideMask1 = ('#LiquidInside1Mask'),
        $LiquidInsideMask2 = ('#LiquidInside2Mask'),
        $LiquidInsideMask3 = ('#LiquidInside3Mask'),
        $LiquidInsideMask4 = $('#LiquidInside4Mask'),
        $LiquidInsideMask5 = $('#LiquidInside5Mask'),
        $LiquidInsideMask6 = $('#LiquidInside6Mask'),
        $LiquidInsideMask7 = $('#LiquidInside7Mask'),
        $bulb1 = $('#Bulb1 .bulb'),
        $bulb3 = $('#Bulb2 .bulb'),
        $bulb4 = $('#Bulb3 .bulb'),
        $meterBcg = $('#meterBcg'),
        $meterStroke = $('#meterStroke'),
        $part2light = $('#Part2 .light'),
        $part2lightLeft = $('#Part2 .light-left'),
        $part2lightMid = $('#Part2 .light-mid'),
        $part2lightRight = $('#Part2 .light-right'),
        $printerLightsTop = $('#PrinterLIghtTop, #PrinterLIghtTop_2_'),
        $printerLightsBottom = $('#PrinterLIghtBottom, #PrinterLIghtBottom_1_'),
        $mainLight = $('#MainLight'),
        $paper = $('#Paper'),
        $slider = $('#slider'),
        $Stage = $('#stage'),
        $MainMask = $('#MainMask'),
        $smile = ('#smile'),
        $body = ('body'),
        mainTL = new TimelineMax();

    function clearStage(){
        var clearTL = new TimelineMax();

        clearTL
            .set($coin, {x: -90, y: 120, scale: 0.5, transformOrigin: 'center center'})
            .set($MainBulb, {fill: '#ffffff'})
            .set($Liquids, {stroke: '#ffffff'})
            .set($Stage, {autoAlpha: 0.5})
            .set($MainMask, {attr: {x: 932}})

            // clear liquids
            .set($LiquidInsideMask1, {attr: {y: 492}})
            .set($LiquidInsideMask2, {attr: {y: 494}})
            .set($LiquidInsideMask3, {attr: {y: 492}})
            .set($LiquidInsideMask4, {attr: {y: 656}})
            .set($LiquidInsideMask5, {attr: {y: 654}})
            .set($LiquidInsideMask6, {attr: {y: 651}})
            .set($LiquidInsideMask7, {attr: {y: 651}})
            .set($pointer, {rotation: -45, transformOrigin: 'bottom center'})
            .set($paper, {y: 611})
            .set($Petr, {autoAlpha: 1, scale: 2.5, x: '1400%', transformOrigin: 'bottom center'});

        return clearTL;
    }

    function getIntroTL() {
        var introTL = new TimelineMax();

            introTL
                .set($h1, {y: '-=40px'})
                .to($Petr, 0.8, {x: '10%', ease: Power4.easeInOut})
                .fromTo($h1, 0.8, {x: '-46%', autoAlpha: 0}, {x: '-50%', autoAlpha: 1})
                .fromTo($smile, 0.4, {scale: 0.4, transformOrigin: 'center center'}, {scale: 1, ease: Power4.easeInOut}, '+=1.2')
                .add('zoom-out')
                .to($Petr, 1, {x: '0%', scale: 1, ease: Power4.easeInOut}, 'zoom-out+=1')
                .to($h1, 0.5, {autoAlpha: 0}, 'zoom-out+=1')
                .to($MainMask, 1, {attr: {x: 131}, ease: Power4.easeInOut}, 'zoom-out+=1.2')
                .set($body, {className: '+=is-active'}, 'zoom-out+=1.2')
                .set($h1, {text: 'and this is my GreenSock Lab!', y: '-=60px'})
                .add('text-in')
                .to($h1, 0.3, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut}, 'text-in')
                .to($h1, 0.5, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, 'text-in+=2.5')
                .set($h1, {y: '-=30px', text: "Let's have some fun"})
                .to($h1, 0.3, {y: '-=20px', autoAlpha: 1, ease: Power4.easeInOut})
                .to($h1, 0.8, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=2')
                .to($Stage, 0.5, {autoAlpha: 1, ease: Power4.easeInOut}, '-=0.8')

        return introTL;
    }

    function getIdeaTL() {
        var idealTL = new TimelineMax();

            idealTL
                .to($BulbIdea, 0.5, {autoAlpha: 1, y: '-=10px', ease: Bounce.easeOut})
                .set($h1, {y: '-=30px', text: "You have a cool idea, right?"})
                .to($h1, 0.3, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
                .to($h1, 0.8, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=2')
                .set($h1, {y: '-=30px', text: "And now what?"})
                .fromTo($BulbIdeaLigth, 0.3, {fill: '#ffffff'}, {fill: '#73C996', repeat: 3, yoyo: true})
                .fromTo($BulbIdeaLigth, 0.3, {fill: '#ffffff'}, {fill: '#F8876E', repeat: 3, yoyo: true})
                .fromTo($BulbIdeaLigth, 0.8, {fill: '#ffffff'}, {fill: '#F8AD43'})
                .to($BulbIdea, 0.6, {y: '-=20px', scale: 1.1, transformOrigin: 'center bottom', ease: Power4.easeOut })
                .to($BulbIdea, 0.3, {y: '+=120px', scale: 0.8, ease: Back.easeIn})
                .set($coin, {autoAlpha: 1}, '+=0.3')
                .to($coin, 6, {rotation: 720, bezier: {curviness: 0.3, values: path}, ease: SlowMo.ease.config(0.9, 0.7, false)})
                .to($h1, 0.3, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut}, '-=5.5')
                .to($h1, 0.8, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '-=3.5')
                .set($h1, {y: '-=30px', text: "Let's Greensock do the rest!"}, '-=3.3')
                .to($h1, 0.3, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut}, '-=3.2')
                .to($h1, 0.8, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '-=1.2')
                .to($part1, 0.06, {rotation: 5, y: '+=5px', x: '+=3px', transformOrigin: 'bottom right', repeat: 5, yoyo:true})
                ;


        return idealTL;
    }


    function getPart2Tl() {
        var part2TL = new TimelineMax();

        part2TL
            .to($pointer, {rotation: 20})
            .staggerTo($part2light, 0.1, {fill: '#F8AD43'}, 0.1)
            .staggerTo($part2light, 0.1, {fill: '#F8876E'}, 0.1)
            .staggerTo($part2light, 0.1, {fill: '#73C996'}, 0.1)
        ;

        return part2TL;
    }


    function init(){
        mainTL
            .add(clearStage())
            .add(getIntroTL(), 'scene-intro')
            .add(getIdeaTL(), 'scene-idea')
            .add(getPart2Tl(), 'scene-part2');

        mainTL.seek('scene-part2-=2');
    }


    init();

})(jQuery);