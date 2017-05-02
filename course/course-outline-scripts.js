AOS.init({duration:400, easing:"ease-in-sine", delay:100});
(function(a) {
  a(function() {
    a(".button-collapse").sideNav();
    a(".collapsible").collapsible();
    a("ul.tabs").tabs();
    a(".modal-trigger").leanModal();
    a(".materialboxed").materialbox();
  });
})(jQuery);
$(function() {
  var a = $("#sideprofile-photo").clone();
  $("#profile-photo-topnav").html(a);
});
document.getElementById("sideprofile-name").appendChild(document.getElementById("profileItemUserData"));
document.getElementById("sideprofile-photo").appendChild(document.getElementById("imgUserThumb"));
document.getElementById("sideprofile-completedcourses").appendChild(document.getElementById("completionsItem"));
document.getElementById("sideprofile-completedcourses").appendChild(document.getElementById("enrolledCoursesItem"));
document.getElementById("admin-topnav").appendChild(document.getElementById("uni-frontside-banner-links"));
$("#bv-maintenance-message").append($(".MaintenanceMessage"));
$(".MaintenanceMessage").length && $("#bv-maintenance-message-wrapper").show();
$(document).ready(function() {
  $("ul.tabs").tabs();
  $(".course-enrolled-link").click(function() {
    $("ul.tabs").tabs("select_tab", "enrolled-courses");
  });
  $(".course-completed-link").click(function() {
    $("ul.tabs").tabs("select_tab", "completed-courses");
  });
  $(".course-calendar-link").click(function() {
    $("ul.tabs").tabs("select_tab", "calendar");
  });
  $(".course-categories-link").click(function() {
    $("ul.tabs").tabs("select_tab", "categories");
  });
});
$(document).ready(function() {
  $("#page-title").prepend($("#courseName"));
  $(".expandable").removeClass("expandable");
  $("#course-details-addtocalendar").prepend($("#courseOutlineContainer #aAddToCalendar"));
  $("#course-details-schedulestartend").prepend($("#courseOutlineContainer #scheduleStartEnd"));
  $("#course-details-location").prepend($("#courseOutlineContainer #pLocation"));
  $("#course-details-instructor").prepend($("#courseOutlineContainer #pInstructor"));
  $("#course-details-enrollbottom").prepend($("#courseOutlineContainer #pEnrollBottom"));
  $("#course-details-enrollbottom").append($(".status-container"));
  $("#course-details-unenroll").prepend($("#courseOutlineContainer #btnUnEnroll"));
  $("#course-details-toggleschedules").prepend($("#courseOutlineContainer #toggleSchedules"));
  $("#course-details-otherschedules").prepend($("#courseOutlineContainer #divOtherSchedules"));
  $("#course-details-additionallinks").prepend($("#AdditionalLinks"));
  $("#course-modules").prepend($("#rowSectionData"));
  $("#description").prepend($("#pnlCourseDetailsImageHolder"));
  $("#flash-messages").append($(".flash-messages-container"));
});
$(document).ready(function() {
  window.refresher = function() {
    return !1;
  };
});
$('input[type="radio"]').each(function(a) {
  $(this).attr("id", "rbSchedule" + a);
  $(this).after("<label for='rbSchedule" + a + "'></label>");
});
$("#btnEnroll").click(function() {
  $("input[name=schedules]:checked").attr("id", "rbSchedule");
});