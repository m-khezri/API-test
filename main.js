
const pets = () => {

    $.get('http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]')
        .done((data) => 
            writePet ();
    )
    .fail ((error)) => {
        console.error();
    }
}