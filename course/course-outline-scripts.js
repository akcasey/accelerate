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
            $("#page-title").prepend($("#courseName")); 
            $('.expandable').removeClass('expandable');
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


        $(document).ready(function () {
            // Stop the function window.refresher from executing (after launching modules)
            window.refresher=function(){return false;};
        });            



        // Fixing the radio buttons: assigning new id and adding label
        $('input[type="radio"]').each(function (i) {
            $(this).attr('id', 'rbSchedule' + i);
            $(this).after("<label for='rbSchedule" + i + "'></label>");    
        });

        // When the Enroll button is clicked  
        $("#btnEnroll").click(function () {
            // Change ID of selected radio button
            $('input[name=schedules]:checked').attr('id', 'rbSchedule');
        });