
window.addEventListener("resize", function(){
    var d_width = window.innerWidth;
    var d_height = window.innerHeight;
    var d_notif = document.getElementById("screen_hp_putar")
    if(d_width<900){
      if(d_height>d_width){
          // document.getElementById("screen_hp_putar").classList.add("d_putar_dulu_layarnya");
          d_notif.classList.add("d_putar_dulu_layarnya")
      }
      else if(d_width>d_height){
        // document.getElementById("screen_hp_putar").classList.add("d_putar_dulu_layarnya");
        d_notif.classList.add("d_putar_dulu_layarnya")
        }
     }
      else{
          // document.getElementById("screen_hp_putar").classList.remove("d_putar_dulu_layarnya");
          d_notif.classList.remove("d_putar_dulu_layarnya")
      }
  });

  
  var d_width = window.innerWidth;
  var d_height = window.innerHeight;
  var d_notif = document.getElementById("screen_hp_putar")
  if(d_width<900){
    if(d_height>d_width){
        // document.getElementById("screen_hp_putar").classList.add("d_putar_dulu_layarnya");
        d_notif.classList.add("d_putar_dulu_layarnya")
    }
    else if(d_width>d_height){
      // document.getElementById("screen_hp_putar").classList.add("d_putar_dulu_layarnya");
      d_notif.classList.add("d_putar_dulu_layarnya")
          }
   }
    else{
        // document.getElementById("screen_hp_putar").classList.remove("d_putar_dulu_layarnya");
        // d_notif.classList.remove("d_putar_dulu_layarnya")
    }


// function d_putar_audio() {
//   var x = document.getElementById("d-backsound").autoplay;
// //   document.getElementById("demo").innerHTML = x;
// }


var d_sound_jawaban_benar = document.getElementById("d-sound_jawaban_benar"); 
var d_sound_jawaban_salah = document.getElementById("d-sound_jawaban_salah");
// document.getElementsByClassName("jawaban_salah_btn").addEventListener("click", d_sound_jawaban_salah);
function d_sound_jawaban_salah_play() {
    d_sound_jawaban_salah.play();
  }
function soal1Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;    
    d_sound_jawaban_benar.play(); 
}

function soal1Lanjut() {
    document.getElementById("d-soal_1").classList.add("d-hide");
    document.getElementById("d-soal_2").classList.remove("d-hide");
}

//===
function soal2Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    d_sound_jawaban_benar.play(); 
}

function soal2Lanjut() {
    document.getElementById("d-soal_2").classList.add("d-hide");
    document.getElementById("d-soal_3").classList.remove("d-hide");
}

//===
function soal3Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    d_sound_jawaban_benar.play(); 
}

function soal3Lanjut() {
    document.getElementById("d-soal_3").classList.add("d-hide");
    document.getElementById("d-soal_4").classList.remove("d-hide");
}

//===
function soal4Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    d_sound_jawaban_benar.play(); 
}

function soal4Lanjut() {
    document.getElementById("d-soal_4").classList.add("d-hide");
    document.getElementById("d-soal_5").classList.remove("d-hide");
}

//===
function soal5Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    d_sound_jawaban_benar.play(); 
}

function soal5Lanjut() {
    document.getElementById("d-soal_5").classList.add("d-hide");
    document.getElementById("d-soal_6").classList.remove("d-hide");
}

//===
function soal6Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    d_sound_jawaban_benar.play(); 
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal6Lanjut() {
    document.getElementById("d-soal_6").classList.add("d-hide");
    document.getElementById("d-soal_7").classList.remove("d-hide");
}

//===
function soal7Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    d_sound_jawaban_benar.play(); 
}

function soal7Lanjut() {
    document.getElementById("d-soal_7").classList.add("d-hide");
    document.getElementById("d-soal_8").classList.remove("d-hide");
}

//===
function soal8Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    d_sound_jawaban_benar.play(); 
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal8Lanjut() {
    document.getElementById("d-soal_8").classList.add("d-hide");
    document.getElementById("d-soal_9").classList.remove("d-hide");
}

//===
function soal9Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    d_sound_jawaban_benar.play(); 
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal9Lanjut() {
    document.getElementById("d-soal_9").classList.add("d-hide");
    document.getElementById("d-soal_10").classList.remove("d-hide");
}

//===
function soal10Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    d_sound_jawaban_benar.play(); 
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal10Lanjut() {
    document.getElementById("d-soal_dikerjakan").classList.add("d-hide");
    document.getElementById("d-soal_10").classList.add("d-hide");
    document.getElementById("d-skor_akhir").classList.remove("d-hide");
    var d_skor = document.getElementById("d-skor_akhir_angka");
    d_skor.innerHTML = document.getElementById("d-skor").innerHTML;
    if (parseInt(d_skor.innerHTML) >= 70){
        document.getElementById("d-status_label").innerHTML = "Lulus";
        document.getElementById("d-status_label").classList.add("d-status_success")
    }
    else{
        document.getElementById("d-status_label").innerHTML = "Belum Lulus";
        document.getElementById("d-status_label").classList.add("d-status_gagal")
    }
}

function lihatHasil(){
    document.getElementById("d-soal_dikerjakan").classList.add("d-hide");
    document.getElementById("d-soal_1").classList.add("d-hide");
    document.getElementById("d-soal_2").classList.add("d-hide");
    document.getElementById("d-soal_3").classList.add("d-hide");
    document.getElementById("d-soal_4").classList.add("d-hide");
    document.getElementById("d-soal_5").classList.add("d-hide");
    document.getElementById("d-soal_6").classList.add("d-hide");
    document.getElementById("d-soal_7").classList.add("d-hide");
    document.getElementById("d-soal_8").classList.add("d-hide");
    document.getElementById("d-soal_9").classList.add("d-hide");
    document.getElementById("d-soal_10").classList.add("d-hide");
    document.getElementById("d-skor_akhir").classList.remove("d-hide");
    document.getElementById("d-waktu_habis").classList.add("d-hide");
    var d_skor = document.getElementById("d-skor_akhir_angka");
    d_skor.innerHTML = document.getElementById("d-skor").innerHTML;
    if (parseInt(d_skor.innerHTML) >= 70){
        document.getElementById("d-status_label").innerHTML = "Lulus";
        document.getElementById("d-status_label").classList.add("d-status_success")
    }
    else{
        document.getElementById("d-status_label").innerHTML = "Belum Lulus";
        document.getElementById("d-status_label").classList.add("d-status_gagal")
    }
}

function btn_kuis_selesai(){
    document.getElementById("d-home").classList.remove("d-hide");
    document.getElementById("d-skor_akhir").classList.add("d-hide");
    document.getElementById("d-sound_jawaban_benar").src = "../sound/salam/2.mp3";
    document.getElementById("d-sound_jawaban_benar").load();
    document.getElementById("d-sound_jawaban_benar").play();
}

function btn_salam_pembuka(){
    document.getElementById("d-sound_mulai").src = "../sound/salam/1.mp3";
    document.getElementById("d-sound_mulai").load();
    document.getElementById("d-sound_mulai").play();
    document.getElementById("d-salam_pembuka").classList.add("d-hide");
}