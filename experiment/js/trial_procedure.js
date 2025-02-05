// FUNCTIONS

// helper function, https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
// create trial procedure
function create_pre_trial(current_trial_info,current_position_image_1, high_interest,low_interest) {

	if (current_position_image_1 == "l") {
		current_left_image = 'images/' + current_trial_info["image_1"] + '.jpg';
		current_right_image = 'images/' + current_trial_info["image_2"] + '.jpg';
	  } else {
		current_left_image = 'images/' + current_trial_info["image_2"] + '.jpg';
		current_right_image = 'images/' + current_trial_info["image_1"] + '.jpg';
	  }
  
	  if (current_trial_info.interest_condition_l == "hi") {
		var current_left_interest = high_interest;
		var current_right_interest = low_interest;
	  } else {
		var current_left_interest = low_interest;
		var current_right_interest = high_interest;
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
  
			current_trial_index = jsPsych.data.get().last(1).values()[0].trial_number
			console.log(current_trial_index); 
  
			current_interest_condition_l = interest_condition_l_list[current_trial_index];
			current_interest_condition_r = interest_condition_r_list[current_trial_index];
  
			if (current_interest_condition_l == "hi") {
			  var current_left_label = high_interest;
			  var current_right_label = low_interest;
			} else {
			  var current_left_label = low_interest;
			  var current_right_label = high_interest;
			}
  
			if (choice_index == 0) {
			  var current_label = current_left_label;
			} else {
			  var current_label = current_right_label;
			}
  
			console.log(current_label);
  
			return `<button class="jspsych-btn" onmouseover="this.style='background-color:#ADD8E6;margin-left:100px;margin-right:100px; padding: 20px;';" onmouseout="this.style='background-color:white;margin-left:100px;margin-right:100px; padding: 20px;';" style="margin-left:100px;margin-right:100px;padding: 20px;"><figcaption style="font-size:30px">${current_label}</figcaption><img src="${choice}" style="width:400px;height:400px"></button>`;
		  },
		prompt: "",
		data: {
		  trial_kind: "trial_instruction",
		  trial_number: trial_number,
		  pair: current_trial_info.pair,
		  image_1: current_trial_info.image_1,
		  image_2: current_trial_info.image_2,
		  condition: current_trial_info.condition,
		  genders: current_trial_info.genders,
		  interest_condition_l: current_trial_info.interest_condition_l,
		  interest_condition_r: current_trial_info.interest_condition_r,
		  image_1_position: current_position_image_1,
		  current_left_image: current_left_image,
		  current_right_image: current_right_image,
		  current_left_interest: current_left_interest,
		  current_right_interest: current_right_interest
		},
	  };

	return pre_trial;
}

function create_trial(current_trial_info,current_position_image_1, high_interest,low_interest) {

	if (current_position_image_1 == "l") {
		current_left_image = 'images/' + current_trial_info["image_1"] + '.jpg';
		current_right_image = 'images/' + current_trial_info["image_2"] + '.jpg';
	  } else {
		current_left_image = 'images/' + current_trial_info["image_2"] + '.jpg';
		current_right_image = 'images/' + current_trial_info["image_1"] + '.jpg';
	  }
  
	  if (current_trial_info.interest_condition_l == "hi") {
		var current_left_interest = high_interest;
		var current_right_interest = low_interest;
	  } else {
		var current_left_interest = low_interest;
		var current_right_interest = high_interest;
	  }

	var trial = {
		type: jsPsychHtmlButtonResponse,
		stimulus: '<p style="font-weight:bold">WHICH KID DO YOU LIKE THE MOST?</p><p style="font-weight:bold">GO!</p>',
		choices: [current_left_image, current_right_image],
		button_layout: "flex",
		button_html:
		  function (choice, choice_index) {
  
			current_trial_index = jsPsych.data.get().last(1).values()[0].trial_number - 1;
			console.log(current_trial_index);
  
			current_interest_condition_l = interest_condition_l_list[current_trial_index];
			current_interest_condition_r = interest_condition_r_list[current_trial_index];
  
			if (current_interest_condition_l == "hi") {
			  var current_left_label = high_interest;
			  var current_right_label = low_interest;
			} else {
			  var current_left_label = low_interest;
			  var current_right_label = high_interest;
			}
  
			if (choice_index == 0) {
			  var current_label = current_left_label;
			} else {
			  var current_label = current_right_label;
			}
  
			console.log(current_label);
  
			return `<button class="jspsych-btn" onmouseover="this.style='background-color:#ADD8E6;margin-left:100px;margin-right:100px; padding: 20px;';" onmouseout="this.style='background-color:white;margin-left:100px;margin-right:100px; padding: 20px;';" style="margin-left:100px;margin-right:100px; padding: 20px;"><figcaption style="font-size:30px">${current_label}</figcaption><img src="${choice}" style="width:400px;height:400px"></button>`;
		  },
		prompt: "",
		data: {
		  trial_kind: "trial_response",
		  trial_number: trial_number,
		  pair: current_trial_info.pair,
		  image_1: current_trial_info.image_1,
		  image_2: current_trial_info.image_2,
		  condition: current_trial_info.condition,
		  genders: current_trial_info.genders,
		  interest_condition_l: current_trial_info.interest_condition_l,
		  interest_condition_r: current_trial_info.interest_condition_r,
		  image_1_position: current_position_image_1,
		  current_left_image: current_left_image,
		  current_right_image: current_right_image,
		  current_left_interest: current_left_interest,
		  current_right_interest: current_right_interest
		},
		post_trial_gap: 500
	  };

	  return trial

}

    


