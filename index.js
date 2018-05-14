const app = require('express')();





app.get('/index', (req, res) => {
    res.send(""+
            "<a href='/'>/</a>\n"+
            "<a href='/amazon'>/amazon</a>\n"+
            "<a href='/lioncloud'>/lioncloud</a>\n"+
            "<a href='/pilvi'>/pilvi</a>\n"+
            "<a href='/mittausta'>/</a>\n"+
            "<a href='/ci'>/</a>\n"+
            "<a href='/kontit'>/</a>\n"+
            "<a href='/konttituotanto'>/</a>\n"+
            "<a href='/tylsaa'>/tylsaa</a>\n"+
            "<a href='/'>/</a>\n"+
            "<a href='/'>/</a>\n"+
            "<a href='/'>/</a>\n"+
        "")
});


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
            "kubernetes - mikropalvelujen orkestrointi\n"+
            "googlen pilvipalvelu\n"+
            "S3: palvelu lioncloudissa\n"+
            "\n"+
            "\n"+
            "\n"+
        "")
});


app.get('/mittausta', (req, res) => {
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


app.get('/kontit', (req, res) => {
    res.send(""+
            "early adoption puoles vaiheessa, legacya on paljon\n"+
            "kirjastojen riippuvuuksien hallinta\n"+
            "immutable infrastructure, joka mikropalvelulle oma virtuaalikone\n"+
            "joka kontille voi asettaa resurssirajat, prossu, muisti\n"+
            "\n"+
            "\n"+
        "")
});
app.get('/konttituotanto', (req, res) => {
    res.send(""+
            "drone on jenkins vastine\n"+
            "kääntää kontin\n"+
            "pienemmät muutokset tuotantoon: vähemmän virheitä\n"+
            "kontainerit tuotannossa... käytännössä tarvitaan orkestraattori\n"+
            "tilalliset otukset, esim tietokannat: dockerin voluumit, kuberneteksen claimit\n"+
            "\n"+
            "\n"+
            "\n"+
            "\n"+
        "")
});
app.get('/tylsaa', (req, res) => {
    res.send(""+
            "konttien perusteita väännetään rautalangasta\n"+
            "git rev-list HEAD...origin/master --count\n"+
            "kertoo git muutosten määrän\n"+
            "vielä joku komento, jotta edellinen kontti sulkeutuu ja nykyne avataan\n"+
            "docker run --name devcon1 -p 3000:3000 -d devcon1"+
            ""+
            "http://markshust.com/2016/08/14/create-and-deploy-nodejs-express-app-docker\n"+
            "https://www.digitalocean.com/community/tutorials/how-to-configure-a-continuous-integration-testing-environment-with-docker-and-docker-compose-on-ubuntu-14-04\n"+
        "")
});

app.listen(3000, () => console.log('Server running'));


