
// removes from global namespace
function alex(){
        
	// format val to n number of decimal places
	// modified version of Danny Goodman's (JS Bible)
	function formatDecimal(val, n) {
			n = n || 2;
			const str = "" + Math.round ( parseFloat(val) * Math.pow(10, n) );
			while (str.length <= n) {
					str = "0" + str;
			}
			const pt = str.length - n;
			return str.slice(0,pt) + "." + str.slice(pt);
	}
	
	function getRadioVal(form, name) {
			const radios = form.elements[name];
			let val;
			
			for (let i=0, len=radios.length; i<len; i++) {
					if ( radios[i].checked == true ) {
							val = radios[i].value;
							break;
					}
			}
			return val;
	}
	
	function getTypeTotal(e) {
			let form = this.form;
			let val = parseFloat( form.elements['type_tot'].value );
			
			if ( this.checked == true ) {
					val += parseFloat(this.value);
			} else {
					val -= parseFloat(this.value);
			}
			
			form.elements['type_tot'].value = formatDecimal(val);
			updateWebsTotal(form);
	}
	
	

	function getWebsPrice(e) {
			this.form.elements['webs_tot'].value = parseFloat( this.value );
			updateWebsTotal(this.form);
	}
	
	function getMesesPrice(e) {
			this.form.elements['meses_tot'].value = parseFloat( this.value );
			updateWebsTotal(this.form);
	}
	
	function updateWebsTotal(form) {
		const webs_tot = parseFloat( form.elements['webs_tot'].value );
		const meses_tot = parseFloat( form.elements['meses_tot'].value );
		const type_tot = parseFloat( form.elements['type_tot'].value );
			const totalDescuento = ((webs_tot + type_tot) * meses_tot)
			form.elements['total'].value =  formatDecimal( webs_tot + type_tot - totalDescuento) + ` \€`;
	}

	
	
	const form = document.getElementById('form-presupuesto');

	const el = document.getElementById('webs_type');

	// input in Type container element
	const tops = el.getElementsByTagName('input');

	for (let i=0, len=tops.length; i<len; i++) {
			if ( tops[i].type === 'checkbox' ) {
					tops[i].onclick = getTypeTotal;
			}
	}

	const sz = form.elements['webs'];
	
	for (let i=0, len=sz.length; i<len; i++) {
		sz[i].onclick = getWebsPrice;
	}
	
	const ms = form.elements['meses'];
	for (let j=0, len=ms.length; j<len; j++) {
		ms[j].onclick = getMesesPrice;
	}

	// set webs_tot to value of selected
	form.elements['webs_tot'].value =  parseFloat( getRadioVal(form, 'webs') ) ;
	form.elements['meses_tot'].value =  parseFloat( getRadioVal(form, 'meses') ) ;
	updateWebsTotal(form);

};
alex();
	

/*  $checkbox = $(" input[type=checkbox]:checked"); */

  /* $checkbox.each(function() {
		costeTotal = costeTotal + parseInt($(this).val());
	}); 

	 */
	
/* 	let amount = ((parseInt($checkbox.val()) + parseInt($option.val())) * parseInt($numbers.val())) / 100;
 */

	/* if($option.val() ||  $checkbox.val()){
		
		$option.each(function() {
			costeTotal = costeTotal + parseInt($(this).val());
		});


		$checkbox.each(function() {
			costeTotal = costeTotal + parseInt($(this).val());
		});

	}   else if( $numbers.val()) {
		let plazo = parseInt($option.val()) * parseInt($numbers.val()) / 100;
			costeTotal -= plazo;
	}     */


  
