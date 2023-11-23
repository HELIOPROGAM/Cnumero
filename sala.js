const firebaseConfig = {
    apiKey: "AIzaSyA21y0CO0RtMGElW9NxIq6wZ5ak162Liaw",
    authDomain: "testekwitter.firebaseapp.com",
    databaseURL: "https://testekwitter-default-rtdb.firebaseio.com",
    projectId: "testekwitter",
    storageBucket: "testekwitter.appspot.com",
    messagingSenderId: "364995332721",
    appId: "1:364995332721:web:0de8c39165ffdfe29269d0",
    measurementId: "G-09MT67BKZQ"
  };
  

    firebase.initializeApp(firebaseConfig);


  inicializar();
    function inicializar() {
        const nomeUsuario = localStorage.getItem("nomeUsuario");
        document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario + "!";
    

     getData();
    }

    function addSala() {
        const nomeSala = document.getElementById("nomeSala").value;
        console.log(nomeSala);
        if (nomeSala) {
            firebase.database().ref("/").nomeSalachild().set({
             purpose: "sala criada"
            });

            carregaSala(nomeSala);
              
        }
    }
