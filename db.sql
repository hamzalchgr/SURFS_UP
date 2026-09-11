-- CREATE DATABASE IF NOT EXISTS surfs_up;

CREATE TABLE IF NOT EXISTS camps (
   camp_id SERIAL PRIMARY KEY,
   start_date DATE NOT NULL,
   end_date DATE NOT NULL,

   CONSTRAINT chk_dates CHECK (end_date > start_date)
);

CREATE TABLE IF NOT EXISTS camp_rooms (
   room_id SERIAL PRIMARY KEY,
   camp_id INT NOT NULL REFERENCES camps(camp_id) ON DELETE CASCADE,

   room_type VARCHAR(50) NOT NULL,
   price_eur NUMERIC(6, 2) NOT NULL,

   total_slots INT NOT NULL DEFAULT 10,
   booked_slots INT NOT NULL DEFAULT 0,

   CONSTRAINT chk_slots CHECK (total_slots >= booked_slots),
   CONSTRAINT uq_camp_room_type UNIQUE (camp_id, room_type),

   CONSTRAINT chk_room_type CHECK (
      room_type IN ('Shared room', 'Private room', 'Couple package')
   )
);

CREATE TABLE IF NOT EXISTS campers (
   camper_id SERIAL PRIMARY KEY,

   name VARCHAR(50) NOT NULL,
   email VARCHAR(150) NOT NULL UNIQUE,

   created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS reservations (
   reservation_id SERIAL PRIMARY KEY,

   camp_id INT REFERENCES camps(camp_id) ON DELETE CASCADE,
   camper_id INT REFERENCES campers(camper_id) ON DELETE CASCADE,
   room_id INT REFERENCES camp_rooms(room_id) ON DELETE CASCADE,

   status VARCHAR(50) NOT NULL DEFAULT 'pending',
   amount_due NUMERIC(6, 2) NOT NULL,

   note VARCHAR(1000),
   created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

   CONSTRAINT chk_status CHECK (
      status IN ('Pending', 'Confirmed', 'Cancelled')
   )
);

INSERT INTO camps (
   start_date,
   end_date
) VALUES 
   ('2026-10-12', '2026-10-26'), -- Oct 12 to Oct 26
   ('2026-11-02', '2026-11-16'), -- Nov 02 to Nov 16
   ('2026-11-23', '2026-12-07'), -- Nov 23 to Dec 07
   ('2027-01-11', '2027-01-25'); -- Jan 11 to Jan 25

INSERT INTO camp_rooms (
   camp_id, 
   room_type, 
   price_eur
) VALUES 
   (1, 'Shared room', 1390.00),
   (1, 'Private room', 1790.00),
   (1, 'Couple package', 2980.00),
   (2, 'Shared room', 1390.00),
   (2, 'Private room', 1790.00),
   (2, 'Couple package', 2980.00),
   (3, 'Shared room', 1390.00),
   (3, 'Private room', 1790.00),
   (3, 'Couple package', 2980.00);