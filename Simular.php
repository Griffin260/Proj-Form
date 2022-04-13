<!DOCTYPE html>
<html lang="pt-br">
 <head>
     <meta charset="utf-8"/>
     <title>Simulação</title>
     <?php include ("style.php");?>
</head>
<body class="bg">  
<?php
 $nome = $_POST["nome"];
 $email = $_POST["email"];
 $fone = $_POST["fone"];
 $valor = $_POST["valor"];
 $parcela = $_POST["parcela"];
 echo "<br>";
 echo "Nome do Cliente : ".$nome."<br/> E-mail :".$email."<br/>";
 echo "Telefone Para Contato : ".$fone."<br/> Valor Desejado :".$valor."<br/>";
 echo "Numero de Parcelas Desejadas : ".$parcela."<br/>";
?><br/>
<?php
//etapa 4 (imprimir table)
echo "<table border =\"1\" style='border-collapse: collapse'>";
echo "<tr>
         <th>QTD DE PARCELAS</th>
         <th>VALOR DA PARCELA (R$)</th>
         <th>TOTAL (R$)</th>
      </tr>";

    //etapa 5 (laço de repetição para preencher os campos)

      for ($col=$parcela; $col <= 24; $col++) { 
             //obter o valor da parcela
             $valorDaParcela = $valor/$col;

             //calcular o novo valor da parcela conforme o juros
             $novoValorDaParcela = $valorDaParcela + ($valorDaParcela*0.0167);

             //valor total do emprestimo
             // $valorTotalGeral = $col*$novoValorDaParcela;
             $valorTotalGeral =$novoValorDaParcela*$col;
            
            echo "<tr>
                    <td>$col x</td>
                    <td>$novoValorDaParcela </td>
                    <td>$valorTotalGeral </td>    
                 </tr>";
		}
echo "</table>";
?>
</body>
</html>
