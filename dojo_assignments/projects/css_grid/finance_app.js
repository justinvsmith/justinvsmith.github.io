$(document).ready(function(){

    $("button").click(function(){
       console.log($("#3").val());
       $(this).prev().html(`<div>{input}</div>`);
    });


});
 
/* <div class="category">
                    <h4>Income</h4>
                    <table>
                        <tr>
                            <th class="first">title</th>
                            <th>title</th>
                            <th>title</th>
                        </tr>
                        <tr>
                            <td class="first">testing</td>
                            <td>testing</td>
                            <td>input</td>
                        </tr>
                        <tr>
                            <td class="first solo" colspan="4">testing</td>
                        </tr>
                    </table>
                    </table>
                </div>

}); */
