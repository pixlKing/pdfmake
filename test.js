function generarPDF(){

	var numeroLicencia = 12345678;

	var docDefinition = {
	  content: [
	    {
	      table: {
	        widths: [ '*', '*', '*', ],
	        //heights: 40,
	        body: [
	        	[
	        		{text:'Transener', alignment: 'center'},
	        		{text: 'Licencia de trabajo', alignment: 'center'},
	        		{text: numeroLicencia, alignment: 'center'}
	        	]
	        ]
	      }
	    }
	  ]
	};

	pdfMake.createPdf(docDefinition).download();
}

