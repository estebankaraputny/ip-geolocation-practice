const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '81850b4761mshf2c624eeb7038c7p193a8fjsn55e52d21720c',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
};

const fetchIpInfo = ip => {
    return fetch(`https://ip-geo-location.p.rapidapi.com/ip/${ip}`, OPTIONS)
	.then(res => res.json())
	.catch(err => console.error(err));
    }

  const form = document.querySelector('#form')
  const ipInput = document.querySelector('#ipInput')
  const submit = document.querySelector('#submit')
  const results = document.querySelector('#results')


  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = ipInput
    if (!value) return

    submit.setAttribute('disabled', '')
    submit.setAttribute('aria-busy', 'true')
    
    const ipInfo = await fetchIpInfo(value)

    if (ipInfo){
        results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    submit.removeAttribute('disabled')
    submit.removeAttribute('aria-busy')
  })