const EventCard = ({ title, date, description, location }) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-wide text-anthracite/70">
        {date}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-anthracite">{title}</h3>
      <p className="mt-2 text-sm text-anthracite/80">{description}</p>
      {location && (
        <p className="mt-4 text-sm font-medium text-anthracite">
          📍 {location}
        </p>
      )}
    </div>
  );
};

export default EventCard;
