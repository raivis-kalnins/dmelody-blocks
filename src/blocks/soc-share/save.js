import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
export default function save( { attributes } ) {
	const { icoMarginRight, icoHeight, icoColor, icoColorHover, fbHidden, xtwHidden, lnHidden, wappHidden, telegHidden, emailHidden, linklHidden } = attributes;
	return (
		<div id="dp-soc-share-wrap" { ...useBlockProps.save() }>
			<div className="dp-soc-share">
				{!fbHidden && (<div className='dp-soc-share_item dp-soc-share_item--fb'><a href='' rel="noopener"></a></div>)}
				{!xtwHidden && (<div className="dp-soc-share_item dp-soc-share_item--xtw"><a href='' rel="noopener"></a></div>)}
				{!lnHidden && (<div className="dp-soc-share_item dp-soc-share_item--ln"><span></span></div>)}
				{!wappHidden && (<div className="dp-soc-share_item dp-soc-share_item--wapp"><a href='' rel='noopener'></a></div>)}
				{!telegHidden && (<div className="dp-soc-share_item dp-soc-share_item--teleg"><a href='' rel="noopener"></a></div>)}
				{!emailHidden && (<div className="dp-soc-share_item dp-soc-share_item--email"><a href=''></a></div>)}
				{!linklHidden && (<div className="dp-soc-share_item dp-soc-share_item--link"><span><input type='text' value='' id='copyInput'/></span></div>)}
				<style>{("#dp-soc-share-wrap .dp-soc-share_item{margin-right:"+icoMarginRight+"px}#dp-soc-share-wrap .dp-soc-share_item a,#dp-soc-share-wrap .dp-soc-share_item span{height:"+ icoHeight +"px !important}#dp-soc-share-wrap .dp-soc-share_item svg path{fill:"+icoColor+" !important} #dp-soc-share-wrap .dp-soc-share_item a:hover svg path,#dp-soc-share-wrap .dp-soc-share_item span:hover svg path{fill:"+icoColorHover+" !important}")}</style>
			</div>
		</div>
	);
}