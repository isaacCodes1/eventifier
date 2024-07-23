import PropTypes from 'prop-types';


const DiscoverCard = ({ date, title, image, time, interested, amount, type, code, ticketImage }) => {
  return (
    <div className='max-w-sm bg-white rounded-lg overflow-hidden m-4'>
      <img src={image} alt={title} className='w-full h-48 object-cover cursor-pointer'/>
      <div className='p-4 flex'>
        <div className='flex flex-col mr-4'>
        <div className='text-lg text-purple-700 montes font-semibold'>{date}</div>
        </div>
        <div className='flex flex-col'>
        <div className='text-lg font-bold opensans'>{title}</div>
        <div className='text-sm text-gray-800 opensans'>{type}</div>
        <div className='text-sm text-gray-500 opensans'>{time}</div>
        <div className='text-sm text-gray-900 opensans'>{amount}</div>
        <div className='flex gap-2 items-center'>
          <img src={ticketImage} alt="Ticket"  className='w-5 h-5'/>
        <div className='text-sm text-black opensans'>{code}</div>
        <div className='text-sm text-gray-500 opensans'>{interested}</div>
        </div>
      </div>
    </div>
    </div>
  )
};

DiscoverCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  interested: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  ticketImage: PropTypes.string.isRequired,
}

export default DiscoverCard