import dotenv from 'dotenv';
dotenv.config();

function uploadImage() {
	return new Promise((resolve, reject) => {
		if (window.cloudinary) {
			window.cloudinary.openUploadWidget(
				{
					cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
                    uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
                    apiKey: process.env.REACT_APP_CLOUDINARY_API_KEY,
                    apiSecret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
					sources: [
						'local',
						'url',
						'camera'
					],
					showAdvancedOptions: false,
					multiple: false,
					defaultSource: 'local',
					clientAllowedFormats: ['png', 'jpeg'],
					styles: {
						palette: {
							window: '#FFFFFF',
							windowBorder: '#90A0B3',
							tabIcon: '#90A0B3',
							menuIcons: '#000000',
							textDark: '#000000',
							textLight: '#FFFFFF',
							link: '#000000',
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
                        console.log(err, 'err')
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
