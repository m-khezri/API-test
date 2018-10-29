const chicagoData = () => {
	return new Promise((resolve, reject) => {
		$.ajax('https://data.cityofchicago.org/resource/9pkb-4fbf.json')
			.done(response) => {
                ChicagoInfo(response);
            })
            .fail(error => {
                console.error(error);
            });

            const loadData = ChicagoLoadData => {
                let
            }
};

chicago();
