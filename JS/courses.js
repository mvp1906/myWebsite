// Name: Vijay Prakash Mudaliar
// Student Id: 8962818

"use strict";

$(document).ready(function() {

    //datepicker plugin
    $("#datepicker").datepicker({
        onSelect: function(dateText,  inst){
            console.log("Selected date: "+dateText);
        }
    }); 


    //dialog plugin
    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Ok: function() {
                $(this).dialog("close");
            }
        }
    });

    // to open dialog box
    $("#open-dialog").on("click", function() {
        $("#dialog").dialog("open");
    });

    // tooltip UI
    $("label[for='datepicker']").qtip({
        content: "Select a date using the Datepicker",
        position: {
            my: "top left",
            at: "bottom right"
        }
    });

    //Programming and Development
    $(".rollover-pd h4").mouseenter(function() {
      $(this).next().removeClass("hidden");
        }).mouseleave(function() {
        $(this).next().addClass("hidden");
      });
  
       // to show additional courses
       function showAdditionalCourses_pd() {
        $(".rollover-pd li:hidden").removeClass("hidden");
        $(".btnViewMore-pd").hide();
        $(".btnViewLess-pd").show();
    }
  
    // to hide additional courses
    function hideAdditionalCourses_pd() {
        $(".rollover-pd li:gt(4)").addClass("hidden");
        $(".btnViewMore-pd").show();
        $(".btnViewLess-pd").hide();
    }
  
    // to show additional courses on view more
    $(".btnViewMore-pd").click(function() {
        showAdditionalCourses_pd();
    });
  
    //to hide additional courses on view less
    $(".btnViewLess-pd").click(function() {
        hideAdditionalCourses_pd();
    });
  
    // to hide the view more button on pressing view less
    hideAdditionalCourses_pd();
  
    //Data Science
    $(".rollover-ds h4").mouseenter(function() {
      $(this).next().removeClass("hidden");
        }).mouseleave(function() {
        $(this).next().addClass("hidden");
      });
  
       // to show additional courses
       function showAdditionalCourses_ds() {
        $(".rollover-ds li:hidden").removeClass("hidden");
        $(".btnViewMore-ds").hide();
        $(".btnViewLess-ds").show();
    }
  
    // to hide additional courses
    function hideAdditionalCourses_ds() {
        $(".rollover-ds li:gt(4)").addClass("hidden");
        $(".btnViewMore-ds").show();
        $(".btnViewLess-ds").hide();
    }
  
    // to show additional courses on view more
    $(".btnViewMore-ds").click(function() {
        showAdditionalCourses_ds();
    });
  
    //to hide additional courses on view less
    $(".btnViewLess-ds").click(function() {
        hideAdditionalCourses_ds();
    });
  
    // to hide the view more button on pressing view less
    hideAdditionalCourses_ds();
  
    //Cloud Computing
    $(".rollover-cc h4").mouseenter(function() {
      $(this).next().removeClass("hidden");
        }).mouseleave(function() {
        $(this).next().addClass("hidden");
      });
  
       // to show additional courses
       function showAdditionalCourses_cc() {
        $(".rollover-cc li:hidden").removeClass("hidden");
        $(".btnViewMore-cc").hide();
        $(".btnViewLess-cc").show();
    }
  
    // to hide additional courses
    function hideAdditionalCourses_cc() {
        $(".rollover-cc li:gt(4)").addClass("hidden");
        $(".btnViewMore-cc").show();
        $(".btnViewLess-cc").hide();
    }
  
    // to show additional courses on view more
    $(".btnViewMore-cc").click(function() {
        showAdditionalCourses_cc();
    });
  
    //to hide additional courses on view less
    $(".btnViewLess-cc").click(function() {
        hideAdditionalCourses_cc();
    });
  
    /// to hide the view more button on pressing view less
    hideAdditionalCourses_cc();
  
  
      document.getElementById("average-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const numSubjects = parseInt(document.getElementById("numSubjects").value);
        let totalMarks = 0;
      
        for (let i = 1; i <= numSubjects; i++) {
            const marks = parseFloat(prompt("Enter marks for subject " + i));
            totalMarks += marks;
        }
      
        const average = totalMarks / numSubjects;
        document.getElementById("average-value").textContent = average.toFixed(2);
        document.getElementById("average-result").classList.remove("hidden");
      });
  
      document.getElementById('calculateBtn').addEventListener('click', function() {
        const totalMarks = parseFloat(document.getElementById('totalMarks').value);
        const obtainedMarks = parseFloat(document.getElementById('obtainedMarks').value);
    
        if (isNaN(totalMarks) || isNaN(obtainedMarks)) {
            document.getElementById('result').textContent = "Please enter valid marks.";
            return;
        }
    
        const percentage = (obtainedMarks / totalMarks) * 100;
    
        let grade = '';
        if (percentage >= 90) {
            grade = 'A+';
        } else if (percentage >= 80) {
            grade = 'A';
        } else if (percentage >= 70) {
            grade = 'B';
        } else if (percentage >= 60) {
            grade = 'C';
        } else if (percentage >= 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }
    
        document.getElementById('result').textContent = `Percentage: ${percentage.toFixed(2)}%, Grade: ${grade}`;
    });
  
    document.getElementById("calculateBtn-bt").addEventListener("click", calculateBudget);
  
      function calculateBudget() {
        const income = parseFloat(document.getElementById("income").value);
        const expenses = parseFloat(document.getElementById("expenses").value);
        const savings = parseFloat(document.getElementById("savings").value);
  
        if (isNaN(income) || isNaN(expenses) || isNaN(savings)) {
          alert("Please enter valid numbers for income, expenses, and savings.");
          return;
        }
  
        const totalExpenses = expenses + savings;
        const remainingBalance = income - totalExpenses;
        
        let summary = `<p>Total Expenses (including savings): $${totalExpenses.toFixed(2)}</p>`;
        summary += `<p>Remaining Balance: $${remainingBalance.toFixed(2)}</p>`;
  
        document.getElementById("summary").innerHTML = summary;
      }
  
  });
  
  
