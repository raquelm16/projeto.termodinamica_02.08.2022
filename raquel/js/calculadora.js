       const Limpar1 = function(){
          t1 = ("")
          q1 = ("")
          res1 = ("")
          document.getElementById('t1').value = t1
          document.getElementById('q1').value = q1
          document.getElementById('res1').value = res1
      }

      const Limpar2 = function(){
        t2 = ("")
        u2 = ("")
        res2 = ("")
        document.getElementById('t2').value = t2
        document.getElementById('u2').value = u2
        document.getElementById('res2').value = res2
    }

    const Limpar3 = function(){
        t3 = ("")
        q3 = ("")
        res3 = ("")
        document.getElementById('t3').value = t3
        document.getElementById('q3').value = q3
        document.getElementById('res3').value = res3
    }
      
      const primeiraLei = function(){
          let t1 = document.getElementById('t1').value
          let q1 = document.getElementById('q1').value
          res1 = parseFloat(q1) - parseFloat(t1)
          document.getElementById('res1').value = res1
      }

      const segundaLei = function(){
        let t2 = document.getElementById('t2').value
          let u2 = document.getElementById('u2').value
          res2 = parseFloat(u2) + parseFloat(t2)
          document.getElementById('res2').value = res2
      }

      const efLei = function(){
        let t3 = document.getElementById('t3').value
          let q3 = document.getElementById('q3').value
          res3 = parseFloat(q3) / parseFloat(t3)
          document.getElementById('res3').value = res3
      }