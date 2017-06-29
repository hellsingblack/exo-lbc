import { connect } from 'react-redux';
import Home from '../../components/Home';
import { fetchMessages, saveMessage } from '../../actions/messages';

const mapStateToProps = state => ({
  list: state.list,
});

const mapDispatchToProps = ({
  fetchMessages,
  saveMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
