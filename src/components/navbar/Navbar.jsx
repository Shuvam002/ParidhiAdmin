import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showTIDDropdown, setShowTIDDropdown] = useState(false);
  const [showCRDDropdown, setShowCRDDropdown] = useState(false);
  const [showCheckProfileDropdown, setShowCheckProfileDropdown] =
    useState(false);
  const [showCodingDropdown, setShowCodingDropdown] = useState(false);
  const [showProfileCheckCodingDropdown, setShowProfileCheckCodingDropdown] =
    useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);

  const handleTIDMouseEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
    setShowTIDDropdown(true);
  };

  const handleTIDMouseLeave = () => {
    setDropdownTimer(
      setTimeout(() => {
        setShowTIDDropdown(false);
        setShowCodingDropdown(false);
      }, 1000)
    );
  };

  const handleCRDMouseEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
    setShowCRDDropdown(true);
  };

  const handleCRDMouseLeave = () => {
    setDropdownTimer(
      setTimeout(() => {
        setShowCRDDropdown(false);
        setShowCodingDropdown(false);
      }, 1000)
    );
  };

  const handleCheckProfileMouseEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
    setShowCheckProfileDropdown(true);
  };

  const handleCheckProfileMouseLeave = () => {
    setDropdownTimer(
      setTimeout(() => {
        setShowCheckProfileDropdown(false);
        setShowCodingDropdown(false);
      }, 1000)
    );
  };

  const handleCodingMouseEnter = () => {
    setShowCodingDropdown(true);
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
  };

  const handleCodingMouseLeave = () => {
    setDropdownTimer(
      setTimeout(() => {
        setShowCodingDropdown(false);
        setShowProfileCheckCodingDropdown(false);
      }, 1000)
    );
  };

  const handleProfileCheckCodingMouseEnter = () => {
    setShowProfileCheckCodingDropdown(true);
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
  };

  const handleProfileCheckCodingMouseLeave = () => {
    setDropdownTimer(
      setTimeout(() => {
        setShowProfileCheckCodingDropdown(false);
      }, 1000)
    );
  };

  const handleCloseDropdowns = () => {
    setShowTIDDropdown(false);
    setShowCRDDropdown(false);
    setShowCheckProfileDropdown(false);
    setShowCodingDropdown(false);
    setShowProfileCheckCodingDropdown(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseDropdowns);

    return () => {
      document.removeEventListener("click", handleCloseDropdowns);
      if (dropdownTimer) {
        clearTimeout(dropdownTimer);
      }
    };
  }, [dropdownTimer]);

  return (
    <div className="navbar">
      <NavLink className="cursor" to="/" onClick={handleCloseDropdowns}>
        HOME
      </NavLink>
      <div className="nav-item">
        <NavLink
          className="cursor"
          onMouseEnter={handleTIDMouseEnter}
          onMouseLeave={handleTIDMouseLeave}
          onClick={() => {
            setShowCRDDropdown(false);
            setShowCheckProfileDropdown(false);
            setShowCodingDropdown(false);
          }}
        >
          TID
        </NavLink>
        {showTIDDropdown && (
          <div className="dropdown">
            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              CODING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/Coding/web_minds"
                  >
                    Web Minds
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/Coding/code_quest"
                  >
                    Code Quest
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/Coding/codezen"
                  >
                    Codezen
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              Manual Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/manual_robotics/roboKlassiker"
                  >
                    Robo Klassiker
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/manual_robotics/triathlon"
                  >
                    Tristhlon
                  </NavLink>
                 
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              Autonomous Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/autonomous_robotics/line_trekker"
                  >
                    Line Trekker
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              CIVIL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/civil/setu_bandhan"
                  >
                    Setu Bandhan
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/civil/track_o_treasure"
                  >
                    Track o Treasure
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/civil/mega_arch"
                  >
                    Mega Arch
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              ELECTRICAL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/electrical/electriquest"
                  >
                    Electriquest
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              COMBAT ROBOTICS
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/combat_robotics/throne_of_bots_8kg"
                  >
                    TOB 8kg
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/combat_robotics/throne_of_bots_15kg"
                  >
                    TOB 15kg
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              General
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/genral/table_tennis"
                  >
                    Table Tennis
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/genral/binge_quiz"
                  >
                    Binge Quiz
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="nav-item">
        <NavLink
          className="cursor"
          onMouseEnter={handleCRDMouseEnter}
          onMouseLeave={handleCRDMouseLeave}
          onClick={() => {
            setShowTIDDropdown(false);
            setShowCheckProfileDropdown(false);
            setShowCodingDropdown(false);
          }}
        >
          CRD
        </NavLink>
        {showCRDDropdown && (
          <div className="dropdown">
            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              CODING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/Coding/web_minds"
                  >
                    Web Minds
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/Coding/code_quest"
                  >
                    Code Quest
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/Coding/codezen"
                  >
                    Codezen
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              Manual Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/manual_robotics/roboKlassiker"
                  >
                    Robo Klassikers
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/manual_robotics/triathlon"
                  >
                    Triathlon
                  </NavLink>

{/*                   <NavLink
                    className="cursor nested"
                    to="CRDshow/manual_robotics/throne_of_bots_8kg"
                  >
                    Throne of Bots 8kg
                  </NavLink>

                  <NavLink
                    className="cursor nested"
                    to="CRDshow/manual_robotics/throne_of_bots_15kg"
                  >
                    Throne of Bots 15 kg
                  </NavLink> */}
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              Autonomous Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/autonomous_robotics/line_trekker"
                  >
                    Line Trekker
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              CIVIL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/civil/setu_bandhan"
                  >
                    Setu Bandhan
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/civil/track_o_treasure"
                  >
                    Track o Treasure
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/civil/mega_arch"
                  >
                    Mega Arch
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              ELECTRICAL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/electrical/electriquest"
                  >
                    Electriquest
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              COMBAT ROBOTICS
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/gaming/combat_robotics/throne_of_bots_8kg"
                  >
                    TOB 8kg
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/combat_robotics/throne_of_bots_15kg"
                  >
                    TOB 15kg
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              General
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/genral/table_tennis"
                  >
                    Table Tennis
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/genral/binge_quiz"
                  >
                    Binge Quiz
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <NavLink className="cursor" to="/GIDshow" onClick={handleCloseDropdowns}>
        GID
      </NavLink>

      <div className="nav-item">
        <NavLink
          className="cursor"
          onMouseEnter={handleCheckProfileMouseEnter}
          onMouseLeave={handleCheckProfileMouseLeave}
          onClick={() => {
            setShowTIDDropdown(false);
            setShowCRDDropdown(false);
            setShowCodingDropdown(false);
          }}
        >
          CheckProfile_TID
        </NavLink>
        {showCheckProfileDropdown && (
          <div className="dropdown">
            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              CODING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/Coding/web_minds"
                  >
                    Web Minds
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/Coding/code_quest"
                  >
                    Code Quest
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/Coding/codezen"
                  >
                    Codezen
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              Manual Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/manual_robotics/roboKlassiker"
                  >
                    Robo Klassikers
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/manual_robotics/throne_of_bots_8kg"
                  >
                    Throne of Bots 8kg
                  </NavLink>

                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/manual_robotics/throne_of_bots_15kg"
                  >
                    Throne of Bots 15kg
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              Autonomous Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/autonomous_robotics/line_trekker"
                  >
                    Line Trekker
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              CIVIL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/civil/setu_bandhan"
                  >
                    Setu Bandhan
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/civil/track_o_treasure"
                  >
                    Track o Treasure
                  </NavLink>

                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/civil/mega_arch"
                  >
                    Mega Arch
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              ELECTRICAL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/electrical/electriquest"
                  >
                    Electriquest
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              COMBAT ROBOTICS
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/combat_robotics/throne_of_bots_8kg"
                  >
                    TOB 8kg
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/combat_robotics/throne_of_bots_15kg"
                  >
                    TOB 15kg
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              General
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/genral/table_tennis"
                  >
                    Table Tennis
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CheckProfile_TID/genral/binge_quiz"
                  >
                    Binge Quiz
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <NavLink
        className="cursor"
        to="CheckProfile_GID"
        onClick={handleCloseDropdowns}
      >
        CheckProfile_GID
      </NavLink>
    </div>
  );
};

export default Navbar;
