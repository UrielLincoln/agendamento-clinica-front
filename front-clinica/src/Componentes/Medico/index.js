import "./index.css"


export default function Medico(){

    return(
        <body>
    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>Pacientes</h2></div>
                    <div class="col-sm-4">
                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i>Adicionar novo</button>
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CRM</th>
                        <th>Especialidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dr. Jose</td>
                        <td>jose@email.com</td>
                        <td>123.999.999-00</td>
                        <td>Ortopedia</td>
                    </tr>
                    <tr>
                        <td>Dr. Paulo</td>
                        <td>paulo123@email.com</td>
                        <td>123.123.123-00</td>
                        <td>Cardiologia</td>
                    </tr>    
                </tbody>
            </table>
        </div>
    </div>     
</body>


    );



}