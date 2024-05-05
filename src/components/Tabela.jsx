import DataTables from "datatables.net-dt";
import { useEffect, useRef } from "react";

export function ReactDataTables({ ...props }) {
 
  const tableRef = useRef([]);



  

  useEffect(() => {
    const dt = new DataTables(tableRef.current, props);

    dt.on('click', 'button#editar', function () {
        let data = dt.row(this.parentNode.parentElement).data();
    
        if(data != null ){
          alert('You clicked on edit ' + data?.nomeProfessor + "'s row");
        }
          
    });

    dt.on('click', 'button#excluir', function () {
      let data = dt.row(this.parentNode.parentElement).data();
  
      if(data != null ){
        alert('You clicked on excluir ' + data?.nomeProfessor + "'s row");
      } 
    });
    
    return () => {
      dt.destroy();
    };
   
  }, []);


  return (
    <div>
    <table ref={tableRef}></table>
    </div>
  );
 
}

export default ReactDataTables;