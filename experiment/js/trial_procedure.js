// FUNCTIONS

// helper function, https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
// create trial procedure
function create_pre_trial(current_trial_info,current_position_image_1, current_left_interest,current_right_interest,button_label_index,round_trial_number,trial_type) {

	if (current_position_image_1 == "l") {
		current_left_image = 'images/' + current_trial_info["image_1"] + '.jpg';
		current_right_image = 'images/' + current_trial_info["image_2"] + '.jpg';
	  } else {
		current_left_image = 'images/' + current_trial_info["image_2"] + '.jpg';
		current_right_image = 'images/' + current_trial_info["image_1"] + '.jpg';
	  }

	  // basic social preference trial
	  var pre_trial = {
		type: jsPsychHtmlButtonKeyboardResponse,
		stimulus: '<p style="font-weight:bold">WHICH KID DO YOU LIKE THE MOST?</p><p style="font-weight:bold; opacity: 0">GO!</p>',
		choices: [current_left_image, current_right_image],
		button_layout: "flex",
		response_keys: ["q"],
		button_html:
		  function (choice, choice_index) {
  
			current_button_index = jsPsych.data.get().last(1).values()[0].button_label_lag_index;
			console.log(current_button_index); 

			if (trial_type == "practice") {
				current_left_label = practice_interest_l_list[current_button_index];
				current_right_label = practice_interest_r_list[current_button_index];
			} else {
				current_left_label = interest_l_list[current_button_index];
				current_right_label = interest_r_list[current_button_index];
			}
			
  
			if (choice_index == 0) {
			  var current_label = current_left_label;
			} else {
			  var current_label = current_right_label;
			}
  
			return `<button class="jspsych-btn" onmouseover="this.style='background-color:#ADD8E6;margin-left:100px;margin-right:100px; padding: 20px;';" onmouseout="this.style='background-color:white;margin-left:100px;margin-right:100px; padding: 20px;';" style="margin-left:100px;margin-right:100px;padding: 20px;"><figcaption style="font-size:30px">${current_label}</figcaption><img src="${choice}" style="width:400px;height:400px"></button>`;
		  },
		prompt: "",
		data: {
		  trial_kind: trial_type,
		  overall_trial_number: overall_trial_number,
		  trial_type_number: round_trial_number,
		  button_label_lag_index: button_label_index,
		  pair: current_trial_info.pair,
		  image_1: current_trial_info.image_1,
		  image_2: current_trial_info.image_2,
		  condition: current_trial_info.condition,
		  genders: current_trial_info.genders,
		  interest_condition_l: current_trial_info.interest_condition_l,
		  interest_condition_r: current_trial_info.interest_condition_r,
		  interest_conditions: [current_trial_info.interest_condition_l,current_trial_info.interest_condition_r],
		  image_1_position: current_position_image_1,
		  current_left_image: current_left_image,
		  current_right_image: current_right_image,
		  choice_images: [current_left_image, current_right_image],
		  current_left_interest: current_left_interest,
		  current_right_interest: current_right_interest,
		  current_interests: [current_left_interest,current_right_interest]
		},
	  };

	return pre_trial;
}

function create_trial(current_trial_info,current_position_image_1, current_left_interest,current_right_interest,button_label_index,round_trial_number,trial_type="trials") {

	if (current_position_image_1 == "l") {
		current_left_image = 'images/' + current_trial_info["image_1"] + '.jpg';
		current_right_image = 'images/' + current_trial_info["image_2"] + '.jpg';
	  } else {
		current_left_image = 'images/' + current_trial_info["image_2"] + '.jpg';
		current_right_image = 'images/' + current_trial_info["image_1"] + '.jpg';
	  }

	var trial = {
		type: jsPsychHtmlButtonResponse,
		stimulus: '<p style="font-weight:bold">WHICH KID DO YOU LIKE THE MOST?</p><p style="font-weight:bold">GO!</p>',
		choices: [current_left_image, current_right_image],
		button_layout: "flex",
		button_html:
		  function (choice, choice_index) {
  
			current_button_index = jsPsych.data.get().last(1).values()[0].button_label_lag_index;
			console.log(current_button_index); 

			if (trial_type == "practice") {
				current_left_label = practice_interest_l_list[current_button_index];
				current_right_label = practice_interest_r_list[current_button_index];
			} else {
				current_left_label = interest_l_list[current_button_index];
				current_right_label = interest_r_list[current_button_index];
			}
  
			if (choice_index == 0) {
			  var current_label = current_left_label;
			} else {
			  var current_label = current_right_label;
			}
  
			return `<button class="jspsych-btn" onmouseover="this.style='background-color:#ADD8E6;margin-left:100px;margin-right:100px; padding: 20px;';" onmouseout="this.style='background-color:white;margin-left:100px;margin-right:100px; padding: 20px;';" style="margin-left:100px;margin-right:100px; padding: 20px;"><figcaption style="font-size:30px">${current_label}</figcaption><img src="${choice}" style="width:400px;height:400px"></button>`;
		  },
		prompt: "",
		data: {
		  trial_kind: trial_type,
		  overall_trial_number: overall_trial_number,
		  trial_type_number: round_trial_number,
		  button_label_lag_index: button_label_index,
		  pair: current_trial_info.pair,
		  image_1: current_trial_info.image_1,
		  image_2: current_trial_info.image_2,
		  condition: current_trial_info.condition,
		  genders: current_trial_info.genders,
		  interest_condition_l: current_trial_info.interest_condition_l,
		  interest_condition_r: current_trial_info.interest_condition_r,
		  interest_conditions: [current_trial_info.interest_condition_l,current_trial_info.interest_condition_r],
		  image_1_position: current_position_image_1,
		  current_left_image: current_left_image,
		  current_right_image: current_right_image,
		  choice_images: [current_left_image, current_right_image],
		  current_left_interest: current_left_interest,
		  current_right_interest: current_right_interest,
		  current_interests: [current_left_interest,current_right_interest]
		},
		on_finish: function(data){
			console.log(data);
			// store the chosen image
			data.chosen_image = data.choice_images[data.response];
			data.chosen_interest_condition = data.interest_conditions[data.response];
			data.chosen_interest = data.current_interests[data.response];
		  },
		post_trial_gap: 500
	  };

	  return trial

}

    


