export default function checkIsSameTree(treeA, treeB) {
    let flag = false;
    const recursivo = (arbol1,arbol2) => {
        for (let key in arbol1){
            if(key === 'value'){
                if( arbol1[key] !== arbol2[key]) flag = true;

            }else{
                recursivo(arbol1[key],arbol2[key])
            }
            
        }
    }
    recursivo(treeA,treeB);
    
    return ((flag) ? false : true);

}
