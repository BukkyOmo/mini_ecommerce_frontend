function uploadImage() {
	return new Promise((resolve, reject) => {
		if (window.cloudinary) {
			window.cloudinary.openUploadWidget(
				{
					cloudName: process.env.CLOUDINARY_CLOUD_NAME,
					uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
					sources: [
						'local',
						'url',
						'camera',
						'facebook',
						'dropbox',
						'instagram',
						'shutterstock'
					],
					showAdvancedOptions: false,
					cropping: true,
					multiple: false,
					defaultSource: 'local',
					clientAllowedFormats: ['png', 'jpeg'],
					styles: {
						palette: {
							window: '#FFFFFF',
							windowBorder: '#90A0B3',
							tabIcon: '#90A0B3',
							menuIcons: '#90A0B3',
							textDark: '#000000',
							textLight: '#FFFFFF',
							link: '#90A0B3',
							action: '#90A0B3',
							inactiveTabIcon: '#0E2F5A',
							error: '#F44235',
							inProgress: '#0078FF',
							complete: '#20B832',
							sourceBg: '#E4EBF1'
						}
					}
				},
				(err, eventRes) => {
					if (err) {
						reject(err);
					}
					if (eventRes.event === 'success') {
						resolve(eventRes.info);
					}
				}
			);
		}
	});
};

export default uploadImage;
