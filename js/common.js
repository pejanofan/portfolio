// 標語滾動效果
$(function() {
    $(".textroll").textroll({
        easing: 'easeInOutCirc',
        speed: 700,
        delay: 400
    });

});

// 取消連結虛線
$("a").focus(function() {
    $(this).blur();
});

// SKILLBAR動態
$("#skill-85").ProgressBarWars({ porcentaje: 85, estilo: "skillBar", tiempo: 5980, alto: "2px" });
$("#skill-81").ProgressBarWars({ porcentaje: 80, estilo: "skillBar", tiempo: 5980, alto: "2px" });
$("#skill-80").ProgressBarWars({ porcentaje: 80, estilo: "skillBar", tiempo: 5980, alto: "2px" });
$("#skill-70").ProgressBarWars({ porcentaje: 70, estilo: "skillBar", tiempo: 5980, alto: "2px" });
$("#skill-61").ProgressBarWars({ porcentaje: 65, estilo: "skillBar", tiempo: 5980, alto: "2px" });
$("#skill-65").ProgressBarWars({ porcentaje: 65, estilo: "skillBar", tiempo: 5980, alto: "2px" });
$("#skill-45").ProgressBarWars({ porcentaje: 45, estilo: "skillBar", tiempo: 5980, alto: "2px" });
$("#skill-40").ProgressBarWars({ porcentaje: 40, estilo: "skillBar", tiempo: 5980, alto: "2px" });


// 返回首頁按鈕
$(document).ready(function() {
    $('.work_detail').append('<div class="backBox"><a href="javascript:history.back();">Back to Index</a></div>');
});

$('#work').hover(
    function() {
        $(".Box").backstretch("images/globo.jpg");
    },
    function() {
        $(".Box").backstretch("css/images/bg2.jpg");
    }
);

// 滑過動態
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        if ($window.width() > 0) {

            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.removeClass('in-viewa').addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        } else {
            $element.removeClass('in-view').addClass('in-viewa');

        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


// loading

$(".fakeloader").fakeLoader({
    timeToHide: 1200,
    bgColor: "#222222",
    spinner: "spinner4"
});
