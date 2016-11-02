;(function(window, $){
	// z-index level:
	// normal  dropbox  dialog/dialog
	// 10      100      1000

	// <a href="javascript:;" gui-count-sub class="gui-count-btn gui-count-sub">-</a>
	// <a href="javascript:;" gui-count-add class="gui-count-btn gui-count-add">+</a>
	var selector = '[gui-count]';
	var $doc = $(document);
	var timestamp = +new Date;
	var initName = '_gcount_init_' + timestamp;
	var eventName = 'click.gcount' + timestamp;

	var Count = function(){} 

	Count.render = function(){
		$(selector).each(function(){
			var $this;
			var changeInterval;
			var that = this;
			if(!this[initName]){
				$this = $(this);
				changeInterval = Number($this.attr('gui-count-change-interval'));
				var $input = $this.find('input');
				var $sub = $('<a href="javascript:;" gui-count-sub class="gui-count-btn gui-count-sub">-</a>');
				var $add = $('<a href="javascript:;" gui-count-add class="gui-count-btn gui-count-add">+</a>');
				var $inputWrap = $('<div class="gui-count-input"></div>');

				var value = $input.val();
				var min = Number($this.attr('gui-count-min'));
				var max = Number($this.attr('gui-count-min'));  

				if(min){
					if(value==min){
						$sub.addClass('gui-count-disabled');
					}else{
						$sub.removeClass('gui-count-disabled');
					}
				}
				if($this.attr("gui-count-disabled")){
					$sub.addClass("gui-count-disabled");
					$add.addClass("gui-count-disabled");
				}
				
				$this.append($sub);
				$this.append($add);
				$inputWrap.append($input);
				$this.append($inputWrap);

				$input.on('input keyup', function (event) {
					this.value = this.value.replace(/\D/g, '');
					if(event.keyCode == "13" || event.keyCode == "108")  {
						$this.trigger('count-change', this.value);
					}  
				}).on('focus', function(){
					that.oldValue = this.value; 
				}).on('blur', function(){  
					if(that.oldValue == this.value){
						return;
					}
					$this.trigger('count-change', this.value);
				});


				$this.off(eventName) 
					.on(eventName, '[gui-count-sub]', function(){
						var $this = $(this);
						if($this.hasClass('gui-count-disabled')){
							return;
						} 
						if(that.locked){ 
							return;
						} 
						if(changeInterval){
							that.locked = true; 
							setTimeout(function () { 
								that.locked = false;
							}, changeInterval);
						}
						var $input = $this.parent().find('input');
						var val = parseInt($input.val(), 10) || 0; 
						$input.val(val - 1);  
						that.oldValue = val;
						if($(that).attr('gui-count-animate')){
							animate(true);
						}
						$this.trigger('count-change', val - 1);
					})
					.on(eventName, '[gui-count-add]', function(){ 
						var $this = $(this);
						if($this.hasClass('gui-count-disabled')){
							return;
						}
						if(that.locked){
							return;
						}
						if(changeInterval){
							that.locked = true; 
							setTimeout(function () { 
								that.locked = false;
							}, changeInterval);
						} 
						var $input = $this.parent().find('input');
						var val = parseInt($input.val(), 10) || 0;
						$input.val(val + 1);
						that.oldValue = val; 
						if($(that).attr('gui-count-animate')){
							animate();
						}
						$this.trigger('count-change', val + 1, val);
					});
 
					function animate(isDown){
						var $animateWrap = $('<div class="gui-count-animate"/>');
						var $input = $this.find('input');

						$animateWrap.append('<div>' + (isDown? $input.val(): that.oldValue) + '</div>');
						$animateWrap.append('<div>' + (isDown? that.oldValue: $input.val()) + '</div>');
						

						$animateWrap.appendTo($this);
						$input.css({visibility: 'hidden'});
						$animateWrap.css({
							"top": (isDown ? -$input.height() : 0),
							"*top": (isDown ? -$input.height() : 0)
						}).animate({
							"top": (isDown ? 0: -$input.height()),
							"*top": (isDown ? 0: -$input.height())
						}, 240, function () {
							$animateWrap.remove();
							$input.css({visibility: 'visible'});
						});
					}

				this[initName] = true;
			}
		});
	}
	
	$.gCount = Count;
})(window, $);










