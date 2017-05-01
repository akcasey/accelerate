// - - - - Animate on Scroll - - - - 
        AOS.init({
            duration: 400,
            easing: 'ease-in-sine',
            delay: 100,
        });
  
// - - - - Materialize Initialization - - - -
        (function($){
            $(function(){
                $('.button-collapse').sideNav();
                $('.collapsible').collapsible();
                $('ul.tabs').tabs();
                $('.modal-trigger').leanModal();
                $('.materialboxed').materialbox();
            });
        })(jQuery);

// - - - - Side Navigation - - - -
        $(function(){
            var $image = $('#sideprofile-photo').clone();
            $('#profile-photo-topnav').html($image);
        });

        document.getElementById('sideprofile-name').appendChild(document.getElementById('profileItemUserData'));
        document.getElementById('sideprofile-photo').appendChild(document.getElementById('imgUserThumb'));
        document.getElementById('sideprofile-completedcourses').appendChild(document.getElementById('completionsItem'));
        document.getElementById('sideprofile-completedcourses').appendChild(document.getElementById('enrolledCoursesItem'));
        document.getElementById('admin-topnav').appendChild(document.getElementById('uni-frontside-banner-links'));

// - - - - Maintenance Notification - - - -
        $("#bv-maintenance-message").append($(".MaintenanceMessage"));

        if($('.MaintenanceMessage').length){
            $('#bv-maintenance-message-wrapper').show();
        }

// - - - - Tabs  - - - -
        $(document).ready(function() {
            $('ul.tabs').tabs();
            $(".course-enrolled-link").click(function() { $('ul.tabs').tabs('select_tab', 'enrolled-courses'); });
            $(".course-completed-link").click(function() { $('ul.tabs').tabs('select_tab', 'completed-courses'); });
            $(".course-calendar-link").click(function() { $('ul.tabs').tabs('select_tab', 'calendar'); });
            $(".course-categories-link").click(function() { $('ul.tabs').tabs('select_tab', 'categories'); });
        });

// - - - - Page Specific  - - - -
        $(document).ready(function() {
            $("#page-title").prepend($("#courseName"));                     // Relocating page name
            $('.expandable').removeClass('expandable');                     // Remove uni-frontside-list-item hover class
            $("#course-details").append($("#pnlCourseTitleCostButton"));
            $("#course-details").append($("#AdditionalLinks"));
            $("#course-details").append($("#pEnrollBottom"));
            $("#course-details").append($("#btnUnEnroll"));


            // Getting the url for the outline tab
            /*var url      = window.location.href;
            var coursename = url.match(/CourseDetail(.+)/)[1];
                
            $(function(){
                $('#outline').load('https://go.bluevolt.com/A-dec/CourseOutline' + coursename + ' #courseOutlineContainer');
            }); */
        });   
        // Fixing the radio buttons: assigning new id and adding label
        $('input[type="radio"]').each(function (i) {
            $(this).attr('id', 'rbSchedule' + i);
            $(this).after("<label for='rbSchedule" + i + "'></label>");    
        });

        // When the Enroll button is clicked  
        $("#btnEnroll").click(function () {
            // Change id of selected radio button
            $('input[name=schedules]:checked').attr('id', 'rbSchedule');
        });
