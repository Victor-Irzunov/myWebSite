"use client"
import { Image } from 'antd';
import dogovor1 from '/public/dogovor/1.webp';
import dogovor2 from '/public/dogovor/2.webp';
import dogovor3 from '/public/dogovor/3.webp';
import dogovor4 from '/public/dogovor/4.webp';
import dogovor5 from '/public/dogovor/5.webp';
import dogovor6 from '/public/dogovor/6.webp';


const ImageDogovorComp = () => (
	<Image.PreviewGroup
		items={[
			dogovor1,
			dogovor2,
			dogovor3,
			dogovor4,
			dogovor5,
			dogovor6,
		]}
	>
		<Image
			width={150}
			src='/dogovor/1.webp'
			className='border'
			alt='Договор на оказание услуги по разработке сайта'
		/>
	</Image.PreviewGroup>
);
export default ImageDogovorComp