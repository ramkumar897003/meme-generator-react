import React from 'react'
import { connect } from 'react-redux'
class MyMemes extends React.Component{
	render(){
		return(
			<div>
				{
					this.props.myMemes.map((meme, index) => {
						return(
							<a href={meme.data.url} target="_Blank" download><img key={index} src={meme.data.url} alt="my-meme" className="my-meme-img" /></a>
						)
					})
				}
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		myMemes: state.myMemes
	}
}
export default connect(mapStateToProps,null)(MyMemes)