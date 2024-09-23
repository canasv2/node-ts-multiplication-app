import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

///console.log(process.argv)

//console.log(yarg)
//console.log(yarg.b) //esta 'b' es porque en el packege.json, la bandera que se envia es una b con valor de 10

(async()=>{
    await main();
})();

async function main(){
    //console.log('Main ejecutado')
    //console.log( yarg );
    const { b:base, l:limit, s:showTable, n:name, d:destination} = yarg

    ServerApp.run( {base, limit, showTable, name, destination} );

}