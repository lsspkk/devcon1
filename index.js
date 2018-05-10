const app = require('express')();

app.get('/', (req, res) => {
    res.send("Cinia DevCon Mass Nerds.")
});

app.get('/amazon', (req, res) => {
    res.send("EC2 virtuaalipalvelimet, Elastic Container Service, Lambda, Block-storage, Object Storage\n"+
    "Euroopan konesalit Frankfurt, Irlanti..");
});

app.get('/lioncloud', (req, res) => {
    res.send("VMware virtuaalipalvelimet, Block storage, object storage\n"+
    "Euroopan konesalit Frankfurt, Irlanti..");
});

app.get('/pilvi', (req, res) => {
    res.send("aws aloitti 2006\n"+
            "lokaatio/latenssi\n"+
            "asiakasdata: backup voi mennä ulkomaille...\n"+
            "jos koodari jättää datan saataville, niin tieto näkyy kaikille esim. Fedex S3\n"+
            "jos valitsee aaS -palvelun, siirto toiseen pilveen voi olla hankalaa\n"+
            "myös aws on ollut down S3 Outage 2/2017, joten HA-palvelua varten esim. tietokantaklusteri eri palvelimille\n"+
            "migraatiotuki: palvelininstanssit kirjoitetaan Code-muotoon, eikä jonnekin web-UI:n sekaan \n"+
            "\n"+
            "\n"+
            "\n"+
            "\n"+
            "\n"+
        "")
});


app.get('/checkout', (req, res) => {
    res.send(""+
            "kubernetes - mikä se on, mitä hyötyä\n"+
            "googlen pilvipalvelu\n"+
            "S3: palvelu lioncloudissa\n"+
            "\n"+
            "\n"+
            "\n"+
        "")
});


app.get('/devopsmittausta', (req, res) => {
    res.send(""+
            "taulukkoa eri actioneista ja millisekunneista\n"+
            "taulukkoa tietokantahausta ja millisekunneista\n"+
            "taulukkoa varmennehaun kestoista, ja kuinka moni varmenne pitää pollata\n"+
            "seurataan normaalitilanteen aikoja\n"+
            "\n"+
            "\n"+
        "")
});

app.get('/ci', (req, res) => {
    res.send(""+
            "sonarcube\n"+
            "artifactory tekee raportit\n"+
            "mahdollisimman nopeaa palautetta\n"+
            "\n"+
            "\n"+
            "\n"+
        "")
});


app.get('/ci', (req, res) => {
    res.send(""+
            "\n"+
            "\n"+
            "\n"+
            "\n"+
            "\n"+
            "\n"+
        "")
});
app.get('/ci', (req, res) => {
    res.send(""+
            "\n"+
            "\n"+
            "\n"+
            "\n"+
            "\n"+
            "\n"+
        "")
});
app.get('/ci', (req, res) => {
    res.send(""+
            "\n"+
            "\n"+
            "\n"+
            "\n"+
            "\n"+
            "\n"+
        "")
});

app.listen(3000, () => console.log('Server running'));


