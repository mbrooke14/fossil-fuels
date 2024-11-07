const CO2_TPS = 1337  // Tonnes per second
const CAN_PER = 0.151 // Pourcentage provenant du Canada
const FFE_PER = 0.91  // Pourcentage par combustibles fossiles

// elements
const ELEM = {
    TIME:    document.getElementById("time"),
    CO2:     document.getElementById("CO2-tonnes"),
    CAN_CO2: document.getElementById("CO2-tonnes-can"),
    FF:      document.getElementById("CO2-tonnes-ff")
}

t = 0

function update(ms) {
    t = ms / 1000

    let time_minutes =  Math.floor(t / 60)
    let time_seconds = (Math.round(t % 60 * 10) / 10).toFixed(1)
    let time_minutes_str = time_minutes > 0 ? time_minutes == 1 ? String(time_minutes) + " minute, "  : String(time_minutes) + " minutes, " : ""
    let time_seconds_str =                    time_seconds == 1 ? String(time_seconds) + " seconde "  : String(time_seconds) + " secondes "

    ELEM.TIME.innerText    = `${time_minutes_str}${time_seconds_str}`;
    ELEM.CO2.innerText     = `${Math.round(CO2_TPS * t)} tonnes`;
    ELEM.CAN_CO2.innerText = `${Math.round(CO2_TPS * t * CAN_PER)} tonnes`;
    ELEM.FF.innerText      = `${Math.round(CO2_TPS * t * FFE_PER)} tonnes`;

    requestAnimationFrame(update);
}

update();
