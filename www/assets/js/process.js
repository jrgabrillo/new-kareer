account = {
	ini:function(){
		view.router.navigate('/signup-auth/');
	},
	social_signin:function(){
	},
	social_signup:function(){
	}
}

jobs = {
	ini:function(){
		console.log('jobs initialized')
	},
	get:function(){
		let data = [
					{
						company:{
							logo:'rnr_logo.png',
							name:'RNR Digital Consultancy',
							address:'Unit 8 Viliran Compound, P. Moran West, Lingayen, Pangasinan'
						},
						job:{
							title:'Front-End Developer',
							date:'January 31, 2018',
							requirements:`
										<ul>
											<li>Skills of a Front-End Developer.</li>
											<li>Skills of a Front-End Developer.</li>
											<li>Skills of a Front-End Developer.</li>
										</ul>
										`,
							description:`<p>We are in need of Front-End Developers, who are passionate and highly motivated in making great ideas into reality.</p>`,
						}
					},
					{
						company:{
							logo:'apple.png',
							name:'Apple Corp',
							address:'Bgy. Bagumbayan, Libis, Quezon City, Metro Manila, Philippines'
						},
						job:{
							title:'Operations Manager for Apple Farm',
							date:'February 1, 2018',
							requirements:`
										<ul>
											<li>Skills of an Operations Manager.</li>
											<li>Skills of an Operations Manager.</li>
											<li>Skills of an Operations Manager.</li>
											<li>Skills of an Operations Manager.</li>
											<li>Skills of an Operations Manager.</li>
											<li>Skills of an Operations Manager.</li>
										</ul>
										`,
							description:'<p>We are in need of Operations Managers, who are passionate and highly motivated in operating farm industry.</p><p>We are in need of Operations Managers, who are passionate and highly motivated in operating farm industry.</p>',
						}
					},
					{
						company:{
							logo:'penshoppe.png',
							name:'Penshoppe Inc.',
							address:'519-520 Makiling St, Makati, Metro Manila, Philippines'
						},
						job:{
							title:'Pen Maker',
							date:'January 15, 2018',
							requirements:`
										<ul>
											<li>Skills of a Pen Maker.</li>
											<li>Skills of a Pen Maker.</li>
											<li>Skills of a Pen Maker.</li>
										</ul>
										`,
							description:'<p>We are in need of Pen Makers, who are passionate and highly motivated in making pen products.</p>',
						}
					},
					{
						company:{
							logo:'bench.png',
							name:'Bench Furnitures',
							address:'Dona Irenia, Parañaque, Metro Manila, Philippines'
						},
						job:{
							title:'Wood Carver',
							date:'January 12, 2018',
							requirements:`
										<ul>
											<li>Skills of a wood carver.</li>
											<li>Skills of a wood carver.</li>
											<li>Skills of a wood carver.</li>
										</ul>
										`,
							description:'<p>We are in need of Wood Carvers, who are passionate and highly motivated in carving bench furnitures.</p>',
						}
					},
					{
						company:{
							logo:'huawei.png',
							name:'Huawei Inc.',
							address:'Taft Ave. Malate Manila, Manila, Metro Manila, Philippines'
						},
						job:{
							title:'Chief Technlogy Officer',
							date:'January 1, 2018',
							requirements:`
										<ul>
											<li>Skills of a Chief Technlogy Officer</li>
											<li>Skills of a Chief Technlogy Officer</li>
											<li>Skills of a Chief Technlogy Officer</li>
										</ul>
										`,
							description:'<p>We are in need of a Chief Technlogy Officer, who are passionate and highly motivated in leading.</p>',
						}
					},
					];
		return data;
	},
	display:function(){
		let display = "";
		for(let post of this.get()){
			$('#display_jobs').append(`<div class='swiper-slide'>
		                                <div class='card job'>
		                                    <div class='card-header align-items-flex-end'>
		                                        <div class='company'>
		                                            <div class='logo-holder'><div class='logo' style='background:url(assets/img/logo/${post.company.logo}) center/cover no-repeat;'></div></div>
		                                            <div class='information'>
		                                                <h3>${post.company.name}</h3>
		                                                <div>${post.company.address}</div>
		                                            </div>
		                                        </div>
		                                    </div>
		                                    <div class='card-content card-content-padding align-self-stretch'>
		                                        <div class='job-description'>
		                                        	<h3>${post.job.title}</h3>
		                                        	<p><span>${post.job.date}</span></p>
		                                        	<div class='row'>
			                                            <strong>Skills</strong>
			                                            <div id='display_skills'>
															<div class="chip color-pink">
																<div class="chip-label">Lorem </div>
															</div>
															<div class="chip color-green">
																<div class="chip-label">voluptatem </div>
															</div>
															<div class="chip color-yellow">
																<div class="chip-label">numquam </div>
															</div>
															<div class="chip color-blue">
																<div class="chip-label">reprehenderit </div>
															</div>
			                                            </div>
		                                        	</div>
		                                        	<div class='row'>
			                                            <strong>Description</strong>
		                                            	${post.job.description}
		                                        	</div>
		                                        	<div class='row'>
			                                            <strong>Requirements:</strong>
		                                            	${post.job.requirements}
		                                        	</div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>`);
		}
		this.scroll();
	},
	scroll:function(){
		let scroll = 0, direction = "";
		$("#display_jobs .card-content").on( 'scroll', function(){
			let scrolled = $(this).scrollTop();
			direction = (scrolled>scroll)?'up':'down';
			console.log(`${direction} ${scrolled}`);
		   	if((direction == 'up') && (scrolled > 10)){
		   		$(this).parent('.card').addClass('active');
		   		$(this).scrollTop(110);
		   		// $(this).parent('.job').find('.logo-holder').attr({'style':`transform:scale(${(1*0.6)}); top:-${(scrolled*0.6)}px; left:-${(scrolled*0.7)}px;`});
		   	}
		   	else if((direction == 'down') && (scrolled < 100)){
		   		$(this).parent('.card').removeClass('active');
		   		$(this).scrollTop(0);
		   		// $(this).animate({scrollTop:0},200);
		   	}
			scroll = scrolled;
		});
	}
}

search = {
	ini:function(){
		
	}
}

signin = {
	ini:function(){
        this.form();
	},
	form:function(){
		$("#form_signin").validate({
		    rules: {
		        field_email: {required: true, maxlength: 50, email:true, validateEmail:true},
		        field_password: {required: true, maxlength: 50},
		    },
		    errorElement : 'div',
		    errorPlacement: function(error, element) {
				var placement = $(element).data('error');
				if(placement){
					$(placement).append(error)
				} 
				else{
					error.insertAfter(element);
				}
			},
			submitHandler: function (form) {
				var _form = $(form).serializeArray();
				form = [form[0].value,form[1].value];
				console.log(form);
                var data = system.ajax(system.host('do-logIn'),form);
                data.done(function(data){
                    console.log(data);
                    // if(data != 0){
                    //     $$("input").val("");
                    //     system.notification("Kareer","Success. Please wait.",false,2000,true,false,function(){
                    //         app.closeModal('.popup-login', true);
                    //         localStorage.setItem('applicant',data);
                    //         content.ini();
                    //     });
                    // }
                    // else{
                    //     system.notification("Kareer","Failed.",false,3000,true,false,false);
                    // }
                });
		    }
		}); 
	}
}

signup = {
	form:function(){

		// var image = document.getElementById('display_picture');
		// var cropper = new Cropper(image, {
		// 	aspectRatio: 1/1,
		// 	dragMode:'none';
		// 	guides:false,
		// 	scalable:false,
		// 	zoomable:false,
		// 	autoCropArea:1,
		// 	cropBoxResizable:false,
		// });

        var $image = $("#display_picture");
        $($image).cropper({
			aspectRatio: 1/1,
			dragMode:'none',
			guides:false,
			scalable:false,
			zoomable:false,
			autoCropArea:1,
			cropBoxResizable:false,
		});

		$("#form_signup").validate({
		    rules: {
		        field_firstname: {required: true, maxlength: 50},
		        field_lastname: {required: true, maxlength: 50},
		        field_email: {required: true, maxlength: 100, email:true, validateEmail:true},
		        field_password: {required: true, maxlength: 50},
		    },
		    errorElement : 'div',
		    errorPlacement: function(error, element) {
				var placement = $(element).data('error');
				if(placement){
					$(placement).append(error)
				} 
				else{
					error.insertAfter(element);
				}
			},
			submitHandler: function (form) {
				let _form = $(form).serializeArray();
				let auth = localStorage.getItem('callback');
				let profile = JSON.parse(localStorage.getItem('account'));
				form = [form[0].value, form[1].value, form[2].value, form[3].value, auth, profile.id];
              
		let picture = $image.cropper("getDataURL");
		console.log(picture);



                // let data = system.ajax(system.host('do-signUp'),form);
                // data.done(function(data){
                //     if(data == 1){
                //         system.notification("Kareer","Success. You are now officially registered.");
                //         view.router.navigate('/home/');                        
                //     }
                //     else if(data == 2){
                //         system.notification("Kareer","You are already signed in. Try signing in using your email.");
                //     }
                //     else{
                //         system.notification("Kareer","Sign up failed.",false,3000,true,false,false);
                //     }
                // });
		    }
		}); 
	},
}

auth = {
	ini:function(){
	},
	google:function(){
		gapi.load('auth2', function() {
			auth2 = gapi.auth2.init({
				client_id: '960874719503-0dhf2g79fc8dqkoalm7r9apsujtlnblc.apps.googleusercontent.com',
				cookiepolicy: 'single_host_origin',
			});
			auth.googleSignIn(document.getElementById('signin_gmail'));
		});
	},
	googleSignIn:function(element){
		auth2.attachClickHandler(element,{},
			function(googleUser){
			localStorage.setItem('callback','google-auth');
				let profile = googleUser.getBasicProfile();
	            profile = {id: profile.getId(), last_name:profile.getFamilyName(), first_name:profile.getGivenName(), email:profile.getEmail(), picture:profile.getImageUrl()};
				localStorage.setItem('account',JSON.stringify(profile));
				sessionStorage.setItem('googleAccessToken', googleUser.getAuthResponse().id_token);
	            system.notification('Google','You are now signed in');
				view.router.navigate('/signup-auth/');
			}, 
			function(error){
	            system.notification('Google','Sign in canceled');
			}
		);
	},
	googleSignOut:function(){
		auth2.disconnect();
	},
	facebook:function(){
        openFB.init({appId: '407673386340765'});
	}
}