<?php 
function kbhns_form_alter(&$form, $form_state, $form_id) {

	if ($form_id == 'webform_client_form_50')
	{	
		$form['files']['submitted_upload_resume']['#attributes']['placeholder'] = t('Upload Resume');
		$form['id']['submitted_first_name']['#attributes']['placeholder'] = t('First Name');

	}
}
