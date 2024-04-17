$(document).ready(function () {
  $(".not-human, .triangle").hide();
  $(".verify").addClass("disabled");

  // Pertanyaan untuk verifikasi
  const verificationQuestion = "5 + 5?";
  const correctAnswer = "6"; // Jawaban yang benar

  // document.getElementById("question").innerHTML(verificationQuestion);

  function human() {
    if ($(".checkbox-text").hasClass("robot")) {
      return;
    } else {
      $(".checkbox-text")
        .text("You're human!")
        .css("color", "green")
        .addClass("human");
      $(".checkbox").addClass("disabled");
      $(".checkbox").click(function (e) {
        e.preventDefault();
      });
    }

    $(".not-human, .triangle").slideUp();
  }

  function robot() {
    if ($(".checkbox-text").hasClass("human")) {
      return;
    } else {
      $(".checkbox-text").text("ROBOT").css("color", "red").addClass("robot");
      $(".checkbox").addClass("disabled");
      $(".checkbox").click(function (event) {
        event.preventDefault();
      });

      $(".not-human, .triangle").slideDown();
    }
  }

  $(".checkbox").click(function () {
    if ($(".checkbox").is(":checked")) {
      $(document).mousemove(function () {
        window.setTimeout(function () {
          human();
        }, 250);
      });

      window.setTimeout(function () {
        robot();
      }, 1000);
    }
  });

  $(".captcha-code").keyup(function (event) {
    if ($(".captcha-code").val().length <= 0) {
      $(".verify").addClass("disabled");
    } else {
      $(".verify").removeClass("disabled");
    }
  });

  $(".verify").click(function () {
    // Jika pengguna tidak manusia, periksa jawaban
    if ($(".checkbox-text").hasClass("robot")) {
      const userAnswer = $(".captcha-code").val().trim().toLowerCase();
      if (userAnswer === correctAnswer.toLowerCase()) {
        $(".checkbox-text").removeClass("robot").addClass("human");
        $(".not-human, .triangle").slideUp();
      } else {
        alert("Incorrect answer! Please try again.");
        $(".captcha-code").val(""); // Reset input
      }
    }
  });
});
